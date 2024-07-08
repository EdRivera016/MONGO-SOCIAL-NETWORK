const router = require('express').Router();
const { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, deleteReaction } = require('../controllers/thoughtController');

// GET all thoughts
router.get('/thoughts', getAllThoughts);

// GET a single thought by _id
router.get('/thoughts/:thoughtId', getThoughtById);

// POST a new thought
router.post('/thoughts', createThought);

// PUT update a thought by _id
router.put('/thoughts/:thoughtId', updateThought);

// DELETE a thought by _id
router.delete('/thoughts/:thoughtId', deleteThought);

// POST add a reaction to a thought
router.post('/thoughts/:thoughtId/reactions', addReaction);

// DELETE remove a reaction from a thought
router.delete('/thoughts/:thoughtId/reactions/:reactionId', deleteReaction);

module.exports = router;
