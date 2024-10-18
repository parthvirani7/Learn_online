const express = require('express');
const { authenticate } = require('../middlewares/auth');
const { enrollUser, completeLesson } = require('../controllers/enrollment,controller');

const router = express.Router();

router.post('/', authenticate, enrollUser);
router.post('/:enrollmentId/lessons/:lessonId/complete', authenticate, completeLesson);

module.exports = router;
