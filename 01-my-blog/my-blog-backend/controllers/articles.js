const { StatusCodes } = require('http-status-codes');
const articlesData = require('../article-content');

const getAllarticles = async (req, res) => {
  res.status(StatusCodes.OK).json({ articlesData, msg: 'get all articles' });
};

const getArticle = async (req, res) => {
  const articleID = Number(req.params.id);
  const articleFound = await articlesData.filter(
    (article) => article.id === articleID
  );
  res
    .status(StatusCodes.OK)
    .json({ articleFound, msg: 'get the article', articleID });
};

const postArticle = async (req, res) => {
  const { id, name, title } = req.body;

  res
    .status(StatusCodes.OK)
    .json({ id: id, name: name, title: title, msg: 'posted the article' });
};

const updateArticle = async (req, res) => {
  const articleID = Number(req.params.id);
  const { id, name, title, likesNum, dislikesNum } = req.body;
  const article = await articlesData.filter((article) => {
    article.id === articleID;
  });
  const updatedArticle = article[id];
  res.status(StatusCodes.OK).json({ article, msg: 'updated the article' });
};

const deleteArticle = async (req, res) => {
  const articleID = req.params.id;
  const article = await articlesData.filter((article) => {
    article.id === articleID;
  });
  res.status(StatusCodes.OK).json({ article, msg: 'deleted the article' });
};

module.exports = {
  getAllarticles,
  getArticle,
  postArticle,
  updateArticle,
  deleteArticle,
};
