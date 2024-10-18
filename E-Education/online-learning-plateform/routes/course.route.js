const express = require('express');
const { authenticate, restrict } = require('../middlewares/auth');
const {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/course.controller');

const router = express.Router();

router.get('/', getCourses);
router.post('/', authenticate, restrict('admin'), addCourse);
router.put('/:id', authenticate, restrict('admin'), updateCourse);
router.delete('/:id', authenticate, restrict('admin'), deleteCourse);

module.exports = router;
