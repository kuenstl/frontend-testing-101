const Todos = require('./todos.service');

module.exports = (app) => {
  app.use('todos', new Todos());
};
