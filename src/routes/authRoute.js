const express = require('express');
const authRouter = express.Router();
const authController = require('../controller/authController');

authRouter.get('/login', (req, res) => {
     res.sendFile('/login')
});

authRouter.get('/register', (req, res) => {
     res.sendFile('/register')
});

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);

module.exports = authRouter;