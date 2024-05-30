const express = require('express');
const authRouter = express.Router();
const authController = require('../controller/authController');
const agentsRepository = require('../repositories/agentsRepository');

authRouter.get('/login', (req, res) => {
     res.sendFile('/login')
});

authRouter.get('/register', (req, res) => {
     res.sendFile('/register')
});

authRouter.get('/json', async (req, res) => {
     const agents = await agentsRepository.findAgentJSON();
     res.status(200).json( agents );
})

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);

module.exports = authRouter;