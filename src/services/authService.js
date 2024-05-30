const userRepository = require('../repositories/userRepository');
const argon2 = require('argon2');

// Business Logic for registering a user
const register = async (email, password) => {
     // Check if user already exists
     const existingUser = await userRepository.findUserByEmail(email);
     if (existingUser) {
          throw new Error('User already exists');
     }

     // Hash the password before sending it to the database
     const hashedPassword = await argon2.hash(password);

     const user = await userRepository.createUser({
          email,
          password: hashedPassword
     });

     return user;
}

// Business Logic for logging in a user
const login = async (email, password) => {
     const user = await userRepository.findUserByEmail(email);
     if (!user) {
          throw new Error('Invalid credentials');
     }

     const passwordMatch = await argon2.verify(user.password, password);
     if (!passwordMatch) {
          throw new Error('Invalid credentials');
     }

     return user;
}


module.exports = {
     register,
     login
}