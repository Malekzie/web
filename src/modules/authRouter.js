const express = require('express');

authRouter = express.Router();

authRouter.get('/login', (req, res) => {
     res.sendFile('/login')
});

authRouter.get('/register', (req, res) => {});

module.exports = authRouter;