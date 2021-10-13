import 'reflect-metadata';
import express from 'express';

import config from './config';

async function runserver() {
  const app = express();

  console.log('setting loaders');
  // set loaders (typeorm and express)
  await require('./loaders').default(app);

  const port = config.PORT || 8000;

  app.listen(port, () => {
    console.log(`Server is on ${port}`);
  });
}

runserver();
