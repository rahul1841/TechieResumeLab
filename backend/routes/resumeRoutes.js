const express = require('express');
const resumeController = require('../controllers/resumeController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/resumes', authMiddleware, resumeController.createResume);
router.get('/resumes', authMiddleware, resumeController.getResumes);

module.exports = router;


