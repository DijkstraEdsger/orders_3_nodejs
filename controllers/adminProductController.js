var response = require('../utils/response');

exports.getUsers = (req, res) => {
    response.sendResponse(res, 200, {message: 'products list'});
};

exports.createUser = (req, res) => {
    response.sendResponse(res, 201, {message: 'create product'});
};