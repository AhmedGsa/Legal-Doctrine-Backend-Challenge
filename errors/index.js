const {UnauthorizedError} = require('./unauthorized');
const {NotFoundError} = require('./not-found');
const {BadRequestError} = require('./bad-request');
const {ForbiddenError} = require('./forbidden');

module.exports = {
    UnauthorizedError,
    NotFoundError,
    BadRequestError,
    ForbiddenError
};