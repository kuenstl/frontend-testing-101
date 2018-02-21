const NeDB = require('nedb');
const service = require('feathers-nedb');

const db = new NeDB({
  filename: './db-data/todos',
  autoload: true
});

const todoModel = service({
  Model: db,
  paginate: {
    default: 2,
    max: 4
  }
});

module.exports = todoModel;