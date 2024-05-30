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
          authService.register(data)
          .then(result => res.status(200).json({ message: 'User registered successfully', result}))
          .catch(error => res.status(400).json({ error: error.message }));
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
          authService.login(data)
          .then(result => res.status(200).json({ message: 'User logged in successfully', result}))
          .catch(error => res.status(400).json({ error: error.message }));
     } else {
          res.status(400).json({ errors });
     }
}

const requestAgentJSon = async (req, res) => {
     const agents = await agentsRepository.findAgentJSON();
     res.status(200).send(agents);
}

module.exports = {
     register,
     login
}