const todoModel = require('./todos.model');

module.exports = (app) => {
  app.use('/todos', todoModel);
};
