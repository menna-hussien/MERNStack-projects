const Post = require('../models/Post');
const User = require('../models/User');

const mongoose = require('mongoose');

const { StatusCodes } = require('http-status-codes');

const createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res
      .status(StatusCodes.OK)
      .json({ savedPost, msg: 'post is created successfully' });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err });
  }
};

const editPost = async (req, res) => {
  try {
    const toBeEditedPost = Post.findOneAndUpdate(
      { _id: req.body.postId, user: req.body.userId },
      req.body
    )
      .populate('user')
      .exec(function (err, post) {
        if (err) {
          res
            .status(StatusCodes.FORBIDDEN)
            .json('you can only edit your posts');
        } else {
          res.status(StatusCodes.OK).json('post is edited successfully');
        }
      });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const deletePost = async (req, res) => {
  try {
    const toBeDeletedPost = Post.findOneAndDelete(
      { _id: req.body.postId, user: req.body.userId },
      req.body
    )
      .populate('user')
      .exec(function (err, post) {
        if (err) {
          res
            .status(StatusCodes.FORBIDDEN)
            .json('you can only delete your posts');
        } else {
          res.status(StatusCodes.OK).json('post is deleted successfully');
        }
      });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const likePost = async (req, res) => {
  try {
    /*  const toBeLikedPost = Post.findOneAndUpdate(
      { _id: req.body.postId, user: req.body.userId },
      {
        $push: {
          likedBy: req.body.likedById,
        },
        $inc: { likes: 1 },
      }
    )
      .populate('user')
      .exec(function (err) {
        if (err) {
          res
            .status(StatusCodes.FORBIDDEN)
            .json('you can only liked your posts');
        } else {
          res.status(StatusCodes.OK).json('post is liked successfully');
        }
      }); */
    const toBeLikedPost = Post.findOne({
      _id: req.body.postId,
      user: req.body.userId,
    })
      .populate('user')
      .exec(function (err, post) {
        if (err) {
          res
            .status(StatusCodes.FORBIDDEN)
            .json('you can only liked your posts');
        } else {
          if (
            !post.likedBy.includes(mongoose.Types.ObjectId(req.body.likedById))
          ) {
            post
              .updateOne({
                $push: {
                  likedBy: req.body.likedById,
                },
                $inc: { likes: 1 },
              })
              .exec();
            //console.log(updated);
            res.status(StatusCodes.OK).json('post is liked successfully');
          } else {
            post
              .updateOne({
                $pull: {
                  likedBy: req.body.likedById,
                },
                $inc: { likes: -1 },
              })
              .exec();
            res.status(StatusCodes.OK).json('post is disliked successfully');
          }
        }
      });

    /*    if (!toBeLikedPost.likedBy.includes(ObjectId(req.body.likedById))) {
      console.log('malk');
      const updated = await toBeLikedPost.updateOne({
        $push: {
          likedBy: req.body.likedBy,
        },
        $inc: { likes: 1 },
      });
      console.log(updated);
    } else {
      res.status(StatusCodes.FORBIDDEN).json('you liked this post already');
    } */
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const getPost = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.body.postId });
    res
      .status(StatusCodes.OK)
      .json({ post, msg: 'post is requested successfully' });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};
const getTimelinePosts = async (req, res) => {
  let postArray = [];

  try {
    const userPosts = await Post.find({ user: req.body.userId });
    const currentUser = await User.findById(req.body.userId);

    /* .populate('user')
      .exec(function (err, posts) {
        if (err) {
          res.status(StatusCodes.FORBIDDEN).json('no posts with this user');
        } else {
          const friendsPosts = Promise.all();
        }
      }); */
    const friendsPosts = await Promise.all(
      currentUser.followers.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );

    res.status(StatusCodes.OK).json(userPosts.concat(...friendsPosts));
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

module.exports = {
  createPost,
  deletePost,
  likePost,
  getPost,
  getTimelinePosts,
  editPost,
};
