const routesConfig = require('./config');
const router = require('./router');

module.exports =  function routes(app) {
    app.use(routesConfig.root, router);
}
