var adminProductController = require('../controllers/adminProductController');

exports.adminProductRoutes = (req, res) => {
    var method = req.method;
    switch (method) {
        case 'GET':
            adminProductController.getUsers(req, res);
            break;
        case 'POST':
            adminProductController.createUser(req, res);
            break;
        default:
            break;
    }
};