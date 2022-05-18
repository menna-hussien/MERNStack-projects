const express = require('express');

const router = express.Router();
const {
  getAllarticles,
  getArticle,
  postArticle,
  updateArticle,
  deleteArticle,
} = require('../controllers/articles');

router.route('/').post(postArticle).get(getAllarticles);

router.route('/:id').get(getArticle).delete(deleteArticle).patch(updateArticle);

module.exports = router;
