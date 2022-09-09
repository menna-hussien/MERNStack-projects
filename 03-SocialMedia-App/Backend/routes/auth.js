const router = require('express').Router();
const { createUser, loginUser } = require('../controllers/user');

//register
router.route('/register').post(createUser);
router.route('/login').post(loginUser);

module.exports = router;
