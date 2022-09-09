const router = require('express').Router();
const {
  createPost,
  editPost,
  deletePost,
  likePost,
  getPost,
  getTimelinePosts,
} = require('../controllers/post');

router.get('/', (req, res) => {
  res.send('Welcome to posts route!');
});

//create a post
router.route('/').post(createPost).put(editPost).delete(deletePost);

//like a post
router.route('/like').put(likePost);

//get a post
router.route('/postInfo').post(getPost);

//get all posts(timeline posts which all posts of all users)
router.route('/timeline').post(getTimelinePosts);

module.exports = router;
