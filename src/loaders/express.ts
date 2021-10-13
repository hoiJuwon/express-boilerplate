const bodyParser = require('body-parser');

import express from 'express';
import cors from 'cors';
import routes from '../api/';

export default (app: express.Application) => {
  app.get('/status', (req, res) => {
    res.status(200).send('helloexpress');
  });
  app.use(express.json());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api', routes());

  return app;
};
