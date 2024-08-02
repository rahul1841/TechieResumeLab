const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createResume = async (userId, content) => {
  try {
    const resume = await prisma.resume.create({
      data: {
        userId,
        content,
      },
    });
    return resume;
  } catch (error) {
    console.error('Error creating resume:', error);
    throw new Error('Error creating resume');
  }
};

const getResumesByUser = async (userId) => {
  try {
    const resumes = await prisma.resume.findMany({
      where: { userId },
    });
    return resumes;
  } catch (error) {
    console.error('Error retrieving resumes:', error);
    throw new Error('Error retrieving resumes');
  }
};

module.exports = {
  createResume,
  getResumesByUser,
};
