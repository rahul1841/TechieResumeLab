const resumeService = require('../services/resumeService');

const createResume = async (req, res) => {
  const userId = req.user.id;
  const { content } = req.body;

  try {
    const resume = await resumeService.createResume(userId, content);
    res.status(201).json(resume);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getResumes = async (req, res) => {
  const userId = req.user.id;

  try {
    const resumes = await resumeService.getResumesByUser(userId);
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createResume,
  getResumes,
};
