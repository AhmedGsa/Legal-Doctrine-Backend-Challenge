const { CustomAPIError } = require("./custom-error");

class ForbiddenError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 403;
  }
}

module.exports = {
    ForbiddenError,
}