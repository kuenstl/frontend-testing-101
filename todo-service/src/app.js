const path = require('path');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('winston');

const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');
const swagger = require('feathers-swagger');

const models = require('./models');
const services = require('./services');

const app = express(feathers());

app.configure(configuration());
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.configure(express.rest());
app.configure(swagger({
  docsPath: '/docs',
  uiIndex: true,
  info: {
    title: 'Todo Service',
    description: 'A simple Todo REST service for demo purposes.'
  }
}));
app.configure(models);
app.configure(services);

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({logger}));


module.exports = app;
