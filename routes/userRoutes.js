const router = require('express').Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../controllers/userController');

// GET all users
router.get('/users', getAllUsers);

// GET a single user by _id
router.get('/users/:userId', getUserById);

// POST a new user
router.post('/users', createUser);

// PUT update a user by _id
router.put('/users/:userId', updateUser);

// DELETE a user by _id
router.delete('/users/:userId', deleteUser);

// POST add a new friend to a user's friend list
router.post('/users/:userId/friends/:friendId', addFriend);

// DELETE remove a friend from a user's friend list
router.delete('/users/:userId/friends/:friendId', deleteFriend);

module.exports = router;
