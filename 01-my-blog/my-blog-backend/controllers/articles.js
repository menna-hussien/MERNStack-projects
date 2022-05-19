const { StatusCodes } = require('http-status-codes');
const ArticleModel = require('../models/article');

const getAllarticles = async (req, res) => {
  const articles = await ArticleModel.find({});
  res.status(StatusCodes.OK).json({ articles, msg: 'get all articles' });
};

const getArticle = async (req, res) => {
  const articleID = req.params.id;
  const article = await ArticleModel.findOne({ _id: articleID });
  res
    .status(StatusCodes.OK)
    .json({ article, msg: 'get the article', articleID });
};

const postArticle = async (req, res) => {
  const { name, title, category, content } = req.body;
  await ArticleModel.create(req.body);

  res
    .status(StatusCodes.CREATED)
    .json({ name: name, title: title, msg: 'posted the article' });
};

const updateArticle = async (req, res) => {
  const articleID = req.params.id;
  const { id, name, title, likesNum, dislikesNum } = req.body;
  const article = await ArticleModel.findOneAndUpdate(
    { _id: articleID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(StatusCodes.OK).json({ article, msg: 'updated the article' });
};

const deleteArticle = async (req, res) => {
  const articleID = req.params.id;

  const article = await ArticleModel.findOneAndDelete({ _id: articleID });

  res.status(StatusCodes.OK).json({ article, msg: 'deleted the article' });
};

module.exports = {
  getAllarticles,
  getArticle,
  postArticle,
  updateArticle,
  deleteArticle,
};
