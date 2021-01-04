var adminUserRoutes = require('./admin_user');
var adminProductRoutes = require('../routes/admin_product');
var url = require('url');

exports.routes = function (req, res) {
    var route = url.parse(req.url, parseQueryString = true);
    console.log(route);
    var a = route.pathname.split('/');
    console.log('array', a);
    switch (route.pathname) {
        case '/admin/users':
            adminUserRoutes.adminUserRoutes(req, res);
            break;
        case '/admin/product':
            adminProductRoutes.adminProductRoutes(req, res);
            break;
        default:
            break;
    }
}