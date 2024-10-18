const express = require('express');
const { authenticate, restrict } = require('../middlewares/auth');
const {
  getUser,
  getProfile,
  addUser,
  loginUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

const router = express.Router();

router.get('/', authenticate, restrict('admin'), getUser);
router.get('/profile', authenticate, getProfile);
router.post('/register', addUser);
router.post('/login', loginUser);
router.put('/:id', authenticate, updateUser);
router.delete('/:id', authenticate, restrict('admin'), deleteUser);

module.exports = router;
