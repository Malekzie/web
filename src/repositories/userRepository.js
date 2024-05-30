const { PrismaClient } = require('@prisma/client');
const db = new PrismaClient();

const findUserByEmail = async (email) => {
     return await db.user.findUnique({
          where: { email }
     });
}

const createUser = async (data) => {
     return await db.user.create({
          data
     });
}

module.exports = {
     findUserByEmail,
     createUser
}