const authService = require('../services/authService');

// Controller Method for registering a user
const register = async (req, res) => {
     const { email, password } = req.body;
     try {
          const user = await authService.register(email, password);
          res.status(201).json({ message: 'User registered successfully', user});
     } catch (error) {
          res.status(400).json({ error: error.message});
     }
}

const login = async (req, res) => {
     const { email, password } = req.body;
     try {
          const user = await authService.login(email, password);
          res.status(200).json({ message: 'User logged in successfully', user });
     } catch (error) {
          res.status(401).json({ error: error.message });
     }
}

module.exports = {
     register,
     login
}