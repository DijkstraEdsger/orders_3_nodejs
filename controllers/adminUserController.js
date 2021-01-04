var response = require('../utils/response');

exports.getUsers = function (req, res) {
    response.sendResponse(res, 200, {message: 'users list'});
}

exports.createUser = (req, res) => {
    response.sendResponse(res, 201, {message: 'create user'});
};