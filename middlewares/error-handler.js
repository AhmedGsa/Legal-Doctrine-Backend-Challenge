const {CustomAPIError} = require('../errors/custom-error')
const {StatusCodes} = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  } else {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message)
      return res.status(StatusCodes.BAD_REQUEST).json({
        msg: messages
      })
    } else if (err.name === 'CastError') {
      return res.status(StatusCodes.BAD_REQUEST).json({
        msg: 'Resource not found'
      })
    } else if (err.code === 11000) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        msg: `${err.keyValue.email} is already used, please provide another one`
      })
    }
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err)
}

module.exports = errorHandlerMiddleware