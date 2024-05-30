const authService = require('../services/authService');
const agentsRepository = require('../repositories/agentsRepository');
const validate = require('../utils/validationUtil');

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
              res.status(200).json({ message: 'User registered successfully' });
          } catch (error) {
               res.status(500).json({ error: 'Failed to register user. Something went wrong with your data' });
          }
     } else {
          res.status(400).json({ errors });
     }
}
// TODO: 
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
               res.status(200).json({ message: 'Login successful!', user });
          } catch (error) {
               res.status(401).json({ error: 'Invalid email or password. Please try again.' });
          }
     } else {
          res.status(400).render('error', { error: errors.message });
     }
}


module.exports = {
     register,
     login
}