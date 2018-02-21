class Todos {

  constructor() {
    this.todos = [];
    this.currentId = 0;

    this.docs = {
      description: 'A service to send and receive messages',
      definitions: {
        todos: {
          'type': 'object',
          'required': [
            'text'
          ],
          'properties': {
            'text': {
              'type': 'string',
              'description': 'The text of the Todo item.'
            },
            'completed': {
              'type': 'boolean',
              'description': 'If the Todo was completed.'
            }
          }
        },
        'todos list': {
          'type': 'array'
        }
      }
    };
  }

  async find(params) {
    return this.todos;
  }

  async get(id, params) {
    const todo = this.todos.find(todo => todo._id === id);

    if(!todo) {
      throw new Error(`Todo with id ${id} not found`);
    }

    return todo;
  }

  async create(data, params) {
    this.todos.push(data);

    return data;
  }

  async put(id, data, params) {
    const todo = await this.get(id);

    return Object.assign(todo, data);
  }

  async remove(id, params) {
    const todo = await this.get(id);
    const index = this.todos.indexOf(todo);

    this.todos.splice(index, 1);

    return todo;
  }
}

module.exports = Todos;