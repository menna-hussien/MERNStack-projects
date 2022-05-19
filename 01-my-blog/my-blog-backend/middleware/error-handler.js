const { StatusCodes } = require('http-status-codes');
const errorHandlerMiddleware = (err, req, res, next) => {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    msg: `Something went wrong, failed with the following error (${err.message})`,
    error: err,
  });
};

module.exports = errorHandlerMiddleware;
