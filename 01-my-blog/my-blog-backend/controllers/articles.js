const { StatusCodes } = require('http-status-codes');
const ArticleModel = require('../models/article');
const { CustomError } = require('../errors/custom-error');

/*const getAllarticles = async (req, res) => {
  const articles = await ArticleModel.find({});
  res.status(StatusCodes.OK).json({ articles, msg: 'get all articles' });
};*/

const getArticle = async (req, res, next) => {
  const articleID = req.params.id;
  const article = await ArticleModel.findOne({ _id: articleID });
  console.log(article);
  if (!article) {
    return next(CustomError(`Article with id: ${articleID} not found`, 404));
  }

  res
    .status(StatusCodes.OK)
    .json({ article, msg: 'get the article', articleID });
};

const postArticle = async (req, res) => {
  const { name, title, category, content } = req.body;
  await ArticleModel.create(req.body);

  res
    .status(StatusCodes.CREATED)
    .json({ name: name, title: title, msg: 'created the new article' });
};

const updateArticle = async (req, res, next) => {
  const articleID = req.params.id;
  const article = await ArticleModel.findOneAndUpdate(
    { _id: articleID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!article) {
    return next(CustomError(`Article with id: ${articleID} not found`, 404));
  }
  res
    .status(StatusCodes.OK)
    .json({ article, msg: 'updated the article', numOfHits: article.length });
};

const deleteArticle = async (req, res, next) => {
  const articleID = req.params.id;

  const article = await ArticleModel.findOneAndDelete({ _id: articleID });

  if (!article) {
    return next(CustomError(`Article with id: ${articleID} not found`, 404));
  }
  res
    .status(StatusCodes.OK)
    .json({ article, msg: 'deleted the article', numOfHits: article.length });
};

const getAllarticles = async (req, res, next) => {
  const { category, sort, numericFilters, fields, limit, page } = req.query;
  const queryObject = {};

  if (category) {
    queryObject.category = category;
  }

  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ['likesNum', 'dislikesNum'];
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  let result = ArticleModel.find(queryObject);

  //for sorting the results
  if (sort) {
    //in case there is more than on sorting
    const sortedList = sort.split(',').join(' ');
    result = result.sort(sortedList);
  } else {
    result.sort('postedAt');
  }

  //for selecting only certain fields such as name and title for example for specific category
  if (fields) {
    const fieldsList = fields.split(',').join(' ');
    result = result.select(fieldsList);
  }

  //for pagination
  const pageNum = Number(page) || 1;
  const MaxRecords = Number(limit) || 10;
  const skip = (pageNum - 1) * MaxRecords;

  result = result.skip(skip).limit(MaxRecords);

  const articles = await result;
  res
    .status(StatusCodes.OK)
    .json({ articles, msg: 'get articles', numOfHits: articles.length });
};

module.exports = {
  getAllarticles,
  getArticle,
  postArticle,
  updateArticle,
  deleteArticle,
};
