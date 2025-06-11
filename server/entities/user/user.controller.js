const { generateToken, generateRefreshToken, decodeToken } = require('@helpers/jwtHelper');
const { hashPassword, comparePasswords } = require('@helpers/bcryptHelper');
const { prisma } = require('@prismaORM');


const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
}

const getUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await prisma.user.findUnique({
            where: { id: userId }
        });
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
    }
}

const register = async (req, res) => {
    const newUser = req.body;
    newUser.password = await hashPassword(newUser.password);
    newUser.birthdate = new Date(newUser.birthdate);

    try {
        const user = await prisma.user.create({
            data: {
                ...newUser
            }
        });


        const token = generateToken({ id: user.id, role: user.role });
        const refreshToken = generateRefreshToken({ id: user.id, role: user.role });

        res.cookie('jwt', token, {
            httpOnly: true,
            sameSite: 'none',
            secure: true
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            sameSite: 'none',
            secure: true
        });
        res.status(201).json({
            message: 'Utilisateur créé avec succès',
            user: user
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur : ' + error });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: { email: email }
        });

        if (!user) {
            return res.status(401).json({ message: 'Utilisateur non trouvé' });
        }

        const isPasswordValid = await comparePasswords(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

        const token = generateToken({ id: user.id, role: user.role });
        const refreshToken = generateRefreshToken({ id: user.id, role: user.role });

        res.cookie('jwt', token, {
            httpOnly: true,
            sameSite: 'none',
            secure: true
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            sameSite: 'none',
            secure: true
        });

        res.status(200).json({
            message: 'Connexion réussie',
            user: user
        });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la connexion :' + error });
    }
}


const updateUser = async (req, res) => {
    const token = req.cookies.jwt;
    const decoded = decodeToken(token);
    const userId = decoded.id;
    if (!userId) {
        return res.status(401).json({ message: 'Utilisateur non authentifié' });
    }

    const userData = req.body;
    try {
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                ...userData
            }
        });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour des informations utilisateur' });
    }
}

const deleteUser = async (req, res) => {
    const token = req.cookies.jwt;
    const decoded = decodeToken(token);
    const userId = decoded.id;
    if (!userId) {
        return res.status(401).json({ message: 'Utilisateur non authentifié' });
    }

    try {
        await prisma.$transaction([
            prisma.goal.deleteMany({
                where: { userId: userId }
            }),
            prisma.progress.deleteMany({
                where: { userId: userId }
            }),
            prisma.user.delete({
                where: { id: userId }
            })
        ]);
        res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression de l\'utilisateur' });
    }
}


const getUserGoals = async (req, res) => {
    const token = req.cookies.jwt;
    const decoded = decodeToken(token);
    const userId = decoded.id;
    if (!userId) {
        return res.status(401).json({ message: 'Utilisateur non authentifié' });
    }

    try {
        const goals = await prisma.goal.findUnique({
            where: { userId: userId }
        });
        res.status(200).json(goals);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de vos objectifs' });
    }
}

const createGoals = async (req, res) => {
    const token = req.cookies.jwt;
    const decoded = decodeToken(token);
    const userId = decoded.id;
    if (!userId) {
        return res.status(401).json({ message: 'Utilisateur non authentifié' });
    }

    // Vérifier si l'utilisateur a déjà un objectif
    const existingGoals = await prisma.goal.findUnique({
        where: { userId: userId }
    });
    if (existingGoals) {
        return res.status(400).json({ message: 'Vous avez déjà un objectif, veuillez le mettre à jour' });
    }

    const userGoals = req.body;
    userGoals.objectifDate = new Date(userGoals.objectifDate);
    try {
        const goals = await prisma.goal.create({
            data: {
                userId: userId,
                ...userGoals
            }
        });
        res.status(200).json(goals);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création de vos objectifs' });
    }
}

const updateGoals = async (req, res) => {
    const token = req.cookies.jwt;
    const decoded = decodeToken(token);
    const userId = decoded.id;
    if (!userId) {
        return res.status(401).json({ message: 'Utilisateur non authentifié' });
    }

    // Vérifier si l'utilisateur a des objectifs avant de les mettre à jour
    const existingGoals = await prisma.goal.findUnique({
        where: { userId: userId }
    });
    if (!existingGoals) {
        return res.status(400).json({ message: 'Aucun objectif trouvé pour cet utilisateur' });
    }

    const goals = req.body;
    goals.objectifDate = new Date(goals.objectifDate);
    try {
        const updatedGoals = await prisma.goal.update({
            where: { userId: userId },
            data: {
                ...goals
            }
        });
        res.status(200).json(updatedGoals);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour de vos objectifs' });
    }
}


const updateProgress = async (req, res) => {
    const token = req.cookies.jwt;
    const decoded = decodeToken(token);
    const userId = decoded.id;
    if (!userId) {
        return res.status(401).json({ message: 'Utilisateur non authentifié' });
    }

    // Vérifier si l'utilisateur a des objectifs avant de créer une progression
    const goals = await prisma.goal.findUnique({
        where: { userId: userId }
    });
    if (!goals) {
        return res.status(400).json({ message: 'Aucun objectif trouvé pour cet utilisateur' });
    }

    // Vérifier si la progression est déjà créée pour la date actuelle
    const today = new Date();
    const existingProgress = await prisma.progress.findUnique({
        where: {
            userId: userId,
            date: {
                gte: new Date(today.setHours(0, 0, 0, 0)),
                lte: new Date(today.setHours(23, 59, 59, 999))
            }
        }
    });

    const progress = req.body;
    try {

        if (existingProgress) {
            const updatedProgress = await prisma.$transaction([
                prisma.progress.update({
                    where: { id: existingProgress.id },
                    data: {
                        ...progress
                    }
                }),
                prisma.user.update({
                    where: { id: userId },
                    data: {
                        weightKg: progress.poidsKg,
                    }
                })
            ]);

            return res.status(200).json({ message: 'Progression du jour mise à jour avec succès', updatedProgress });
        } else {
            const newProgress = await prisma.$transaction([
                prisma.progress.create({
                    data: {
                        userId: userId,
                        ...progress
                    }
                }),
                prisma.user.update({
                    where: { id: userId },
                    data: {
                        weightKg: progress.poidsKg,
                    }
                })
            ]);
            res.status(200).json({ message: 'Progression du jour ajouté avec succès', newProgress });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour de vos objectifs' });
    }
}

const deleteProgress = async (req, res) => {
    const token = req.cookies.jwt;
    const decoded = decodeToken(token);
    const userId = decoded.id;
    if (!userId) {
        return res.status(401).json({ message: 'Utilisateur non authentifié' });
    }

    const progressId = req.params.id;
    try {
        await prisma.progress.delete({
            where: { id: progressId }
        });

        // Récuperer la dernière progression de l'utilisateur
        const lastProgress = await prisma.progress.findUnique({
            where: { userId: userId },
            orderBy: { date: 'desc' }
        });


        // Mettre à jour le poids de l'utilisateur
        if (lastProgress) {
            await prisma.user.update({
                where: { id: userId },
                data: {
                    weightKg: lastProgress.poidsKg
                }
            });
        }

        res.status(200).json({ message: 'Progression supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression de la progression' });
    }
}

const getAllProgress = async (req, res) => {
    const token = req.cookies.jwt;
    const decoded = decodeToken(token);
    const userId = decoded.id;
    if (!userId) {
        return res.status(401).json({ message: 'Utilisateur non authentifié' });
    }

    try {
        const progress = await prisma.progress.findMany({
            where: { userId: userId }
        });
        res.status(200).json(progress);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de la progression' });
    }
}


module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    register,
    login,
    createGoals,
    updateGoals,
    getUserGoals,
    updateGoals,
    updateProgress,
    deleteProgress,
    getAllProgress
}