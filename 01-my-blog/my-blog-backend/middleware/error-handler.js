const { StatusCodes } = require('http-status-codes');

//this middleware is used as a customized error handling before the last middleware layer of express...without it..express will send its default errors
// kindly note, if u decided to throw a new error with next , it will be immedialetly sent to this middleware with a new error rather than that sent by mongoose for example
const errorHandlerMiddleware = (err, req, res, next) => {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    msg: `Something went wrong, failed with the following error (${err.message})`,
    errorDetails: err,
  });
};

module.exports = errorHandlerMiddleware;
