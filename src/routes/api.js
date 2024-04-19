const express = require('express');
const accountsRouter = require('./main');
const mainRouter = require('./main');

const router = express.Router();
const apiVersion = 'v1';

const setRouter = (app) => {
  router.use(`/${apiVersion}/accounts`, accountsRouter);
  router.use(`/${apiVersion}/main/:protocol`, mainRouter);

  app.get('/status', (req, res) => res.send('OK'));
  app.use('/api', router);
};

module.exports = { setRouter };
