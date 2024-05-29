const express = require('express');
const argon2 = require('argon2');
const isValidEmail = require('../utils/passwordHasher.js');
const db = require('./authQueries.js')

authRouter = express.Router();
// TODO: Server side validation for login and register

authRouter.get('/login', (req, res) => {
     res.sendFile('/login')
});


authRouter.post('/regUser', async (req, res) => {
     const email = req.body.email;
     const password = req.body.password;
     


     const passwordHash = await argon2.hash(password, {
          memoryCost: 19456,
		timeCost: 2,
		outputLen: 32,
		parallelism: 1
     })

     const userId = crypto.randomUUID();

     console.log('Password hashed');
     try {
          await db.user.create({
               data: {
                    id: userId,
                    email: email,
                    password: passwordHash
               }
          })

          return new Response("User created", {
               status: 302,
          })

     } catch {
          return new Response("Email already exists", {
               status: 400
          })
     }

});


authRouter.post('/login', async(req, res) => {
     const form = await FormData();
     const email = form.get('email');
     const password = form.get('password');

     if (!email || typeof email !== 'string' || isValidEmail(email)) {
          return new Response("Invalid email", {
               status: 400
          })
     }

     if (!password || typeof password !== 'string') {
          return new Response("Invalid password", {
               status: 400
          })
     }

     const user = await db.user.findUnique({
          where: {
               email: email
          }
     })

     if (!user) {
          return new Response("Invalid email or password", {
               status: 400
          })
     }

     const isValid = await hash.verify(user.password, password);

     if (!isValid) {
          return new Response("Invalid email or password", {
               status: 400
          })
     }
})

module.exports = authRouter;