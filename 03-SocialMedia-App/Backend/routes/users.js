const router = require('express').Router();
const {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  followUser,
  unFollowUser,
} = require('../controllers/user');

router.get('/', (req, res) => {
  res.send('Welcome to users route!');
});

router.route('/userprofile').patch(updateUser).delete(deleteUser).get(getUser);
router.route('/follow').put(followUser);
router.route('/unfollow').put(unFollowUser);

module.exports = router;
