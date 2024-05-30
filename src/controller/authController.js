require('dotenv').config();
const authService = require('../services/authService');
const validate = require('../utils/validationUtil');
const tokenUtils = require('../utils/tokensUtils');
const jwt = require('jsonwebtoken');

// Controller Method for registering a user
const register = async (req, res) => {
     const data = req.body;
     console.log(data);

     const rules = {
          name: 'required|string|min:3|max:255',
          email: 'required|email',
          password: 'required|string|min:6|max:255',
          confirmPassword: 'required|string|min:6|max:255|same:password'
     }

     const { passes, errors} = validate(data, rules);

     if (passes) {
          try{
               
              await authService.register(data);
              res.redirect(301, '/auth/login')
          } catch (error) {
              res.redirect(500, '/auth/register')
          }
     } else {
          res.status(400).json({ errors });
     }
}

const login = async (req, res) => {
     const data = req.body;
     const rules = {
          email: 'required|email',
          password: 'required|string|min:6|max:255'
     }
     
     const { passes, errors } = validate(data, rules);

     if (passes) {
          try{
               const user = await authService.login(data);

              const accessToken =  tokenUtils.generateAccessToken(user);
              
               res.redirect(301, '/auth/profile')
          } catch (error) {
               res.status(401).json({ error: 'Invalid email or password. Please try again.' });
          }
     } else {
          res.status(400).render('error', { error: errors.message });
     }

}


module.exports = {
     register,
     login,
}