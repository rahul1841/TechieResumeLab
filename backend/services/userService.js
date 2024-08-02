const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createUser = async (firstName, lastName, email, password) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existingUser) {
    throw new Error('Email already in use');
  }

  return await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password,
      isVerified: false,
    },
  });
};

const getUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: { email: email },
  });
};

module.exports = {
  createUser,
  getUserByEmail,
};
