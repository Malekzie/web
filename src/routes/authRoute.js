const express = require('express');
const authRouter = express.Router();
const authController = require('../controller/authController');
const agentsRepository = require('../repositories/agentsRepository');

// serve login page
authRouter.get('/login', (req, res) => {
     res.sendFile('/login')
});

// serve register page
authRouter.get('/register', (req, res) => {
     res.sendFile('/register')
});

// Serve profile page and redirect to login page if not logged in
authRouter.get('/profile', (req, res) => {
     if (req.session.loggedIn) {
          res.redirect('/auth/profile');
        } else {
          res.redirect('/auth/login');
        }
});

// Serve JSON data endpoint
authRouter.get('/json', async (req, res) => {
     const agents = await agentsRepository.findAgentJSON();
     res.status(200).json( agents );
})

// Register and login routes
authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);


// Handle logout
authRouter.get('/logout', (req, res) => {
     req.session.destroy();
     res.redirect('/');
}); 

module.exports = authRouter;