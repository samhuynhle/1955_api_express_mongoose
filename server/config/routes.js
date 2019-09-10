const controller = require('../controllers/controller.js');

module.exports = (app) => {
    app.get('/', controller.showall)
    app.get('/new/:name', controller.createnew)
    app.get('/remove/:name', controller.delete)
    app.get('/:name', controller.displayone)
}