const express = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, deleteAllUsers } = require('../controllers/User');
const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.delete('/', deleteAllUsers);

module.exports = router;
