const {generateToken, generateRefreshToken,decodeToken} = require('@helpers/jwtHelper');
const {hashPassword, comparePassword} = require('@helpers/passwordHelper');
const prisma = require('@prismaORM');
const { get } = require('http');

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
    const newUser = req.body.user;
    newUser.password = await hashPassword(newUser.password);
    try {
        const user = await prisma.user.create({
            data: newUser
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
        res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
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

        const isPasswordValid = await comparePassword(password, user.password);
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
        res.status(500).json({ error: 'Erreur lors de la connexion' });
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
        await prisma.user.delete({
            where: { id: userId }
        });
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
        const goals = await prisma.goal.find({
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

    const goals = req.body;
    try {
        const goals = await prisma.goal.create({
            data: {
                userId: userId,
                ...goals
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

    const goals = req.body;
    try {
        const updatedGoals = await prisma.goal.update({
            where: { id: goals.id },
            data: {
                ...goals
            }
        });
        res.status(200).json(updatedGoals);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour de vos objectifs' });
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
    updateGoals
}