const { User, Thought } = require('../models');

const userController = {
  getAllUsers(req, res) {
    User.find({})
      .populate('thoughts')
      .populate('friends')
      .then(usersData => res.json(usersData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  getUserById({ params }, res) {
    User.findOne({ _id: params.userId })
      .populate('thoughts')
      .populate('friends')
      .then(userData => res.json(userData))
      .catch(err => {
        console.log(err);
        res.status(404).json({ message: 'No user found with this id!' });
      });
  },

  createUser({ body }, res) {
    User.create(body)
      .then(userData => res.json(userData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.userId }, body, { new: true, runValidators: true })
      .then(userData => {
        if (!userData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(userData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.userId })
      .then(userData => {
        if (!userData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        // Bonus: Remove user's associated thoughts
        return Thought.deleteMany({ _id: { $in: userData.thoughts } });
      })
      .then(() => res.json({ message: 'User and associated thoughts deleted!' }))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $addToSet: { friends: params.friendId } },
      { new: true }
    )
      .then(userData => {
        if (!userData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(userData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  deleteFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then(userData => {
        if (!userData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(userData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
};

module.exports = userController;
