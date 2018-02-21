const NeDB = require('nedb');
const service = require('feathers-nedb');

const db = new NeDB({
  filename: './db-data/todos',
  autoload: true
});

const todoModel = service({
  Model: db,
  paginate: {
    default: 10,
    max: 10
  }
});

module.exports = todoModel;