const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create a new user
    const newUser = await new User({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
    });

    //save the user and respond
    const user = await newUser.save();
    res
      .status(StatusCodes.CREATED)
      .json({ user, msg: 'created the new user successfully' });
  } catch (err) {
    console.log(err);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);

    !user && res.status(StatusCodes.NOT_FOUND).json('user not found');

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    !validPassword &&
      res.status(StatusCodes.BAD_REQUEST).json('password is incorrect');

    user &&
      res
        .status(StatusCodes.OK)
        .json({ user, msg: 'user logged in successfully' });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const updateUser = async (req, res) => {
  try {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err1) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err1);
      }
    }
    const dbUserId = await User.findOneAndUpdate(
      { _id: req.body.userId },
      req.body
    );

    !dbUserId && res.status(StatusCodes.NOT_FOUND).json('user not found');

    dbUserId && res.status(StatusCodes.OK).json('user updated successfully');
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const dbUserId = await User.findOneAndDelete({ _id: req.body.userId });

    console.log(dbUserId);
    !dbUserId && res.status(StatusCodes.NOT_FOUND).json('user not found');

    dbUserId && res.status(StatusCodes.OK).json('user is deleted successfully');
  } catch (err) {
    if (err.name === 'CastError') {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json('userId is not correct');
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  }
};

const getUser = async (req, res) => {
  try {
    const dbUser = await User.findOne({ _id: req.body.userId });

    const { password, updatedAt, createdAt, ...other } = dbUser._doc;
    //console.log(dbUserId);
    !dbUser && res.status(StatusCodes.NOT_FOUND).json('user not found');

    dbUser &&
      res
        .status(StatusCodes.OK)
        .json({ user: other, msg: 'user is requested successfully' });
  } catch (err) {
    if (err.name === 'CastError') {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json('userId is not correct');
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  }
};

const getAllUsers = async (req, res) => {};

const followUser = async (req, res) => {
  try {
    const loggedInUser = await User.findOne({ _id: req.body.userId });
    const toBeFollowedUser = await User.findOne({
      _id: req.body.toBeFollowedUserId,
    });

    !loggedInUser &&
      res.status(StatusCodes.FORBIDDEN).json('loggedInUser not found');
    !toBeFollowedUser &&
      res.status(StatusCodes.FORBIDDEN).json('toBeFollowedUser not found');

    if (!loggedInUser.followers.includes(req.body.toBeFollowedUserId)) {
      await loggedInUser.updateOne({
        $push: { followers: req.body.toBeFollowedUserId },
      });
      await toBeFollowedUser.updateOne({
        $push: { followings: req.body.userId },
      });
      res.status(StatusCodes.OK).json('user has been followed');
    } else {
      res.status(StatusCodes.FORBIDDEN).json('you already follow this user');
    }
  } catch (err) {
    if (err.name === 'CastError') {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json('userId is not correct');
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  }
};
const unFollowUser = async (req, res) => {
  try {
    const loggedInUser = await User.findOne({ _id: req.body.userId });
    const toBeUnFollowedUser = await User.findOne({
      _id: req.body.toBeUnFollowedUserId,
    });

    !loggedInUser &&
      res.status(StatusCodes.FORBIDDEN).json('loggedInUser not found');
    !toBeUnFollowedUser &&
      res.status(StatusCodes.FORBIDDEN).json('toBeUnFollowedUser not found');

    if (loggedInUser.followers.includes(req.body.toBeUnFollowedUserId)) {
      await loggedInUser.updateOne({
        $pull: { followers: req.body.toBeUnFollowedUserId },
      });
      await toBeUnFollowedUser.updateOne({
        $pull: { followings: req.body.userId },
      });
      res.status(StatusCodes.OK).json('user has been unfollowed');
    } else {
      res.status(StatusCodes.FORBIDDEN).json('you do not follow this user');
    }
  } catch (err) {
    if (err.name === 'CastError') {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json('userId is not correct');
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  }
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  followUser,
  unFollowUser,
};
