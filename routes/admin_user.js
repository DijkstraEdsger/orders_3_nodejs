var adminUserController = require('../controllers/adminUserController');

exports.adminUserRoutes = function (req, res) {
    var method = req.method;
    switch (method) {
        case 'GET':
            adminUserController.getUsers(req, res);
            break;
        case 'POST':
            adminUserController.createUser(req, res);
            break;
        default:
            break;
    }
}