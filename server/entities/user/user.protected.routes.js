const {checkTokens} = require('@helpers/jwtHelper');
const {verifyToken} = require('@middlewares/authMiddleware');
const {
    getAllUsers,
    updateUser,
    deleteUser,
    createGoals,
    updateGoals,
    getUserGoals,
    updateProgress,
    deleteProgress,
} = require('./user.controller'); // importation du controller

const express = require('express');
const Router = express.Router();

Router.post('/checkToken', checkTokens); // Route pour vérifier la session de l'utilisateur


Router.post('/goals', verifyToken, createGoals); // Route protégée pour créer des objectifs
Router.put('/goals', verifyToken, updateGoals); // Route protégée pour mettre à jour les objectifs
Router.get('/goals', verifyToken, getUserGoals); // Route protégée pour récupérer les objectifs de l'utilisateur

Router.put('/update', verifyToken, updateUser); // Route protégée pour mettre à jour les informations de l'utilisateur
Router.delete('/delete', verifyToken, deleteUser); // Route protégée pour supprimer l'utilisateur

Router.post('/progress', verifyToken, updateProgress); // Route protégée pour ajouter la progression du jour de l'utilisateur
Router.put('/progress', verifyToken, updateProgress); // Route protégée pour mettre à jour la progression du jour de l'utilisateur
Router.delete('/progress/:id', verifyToken, deleteProgress); // Route protégée pour supprimer une progression d'un l'utilisateur