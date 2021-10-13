import express from 'express';

import expressLoader from './express';
import dbLoader from './typeorm';

export default async (app: express.Application) => {
  await dbLoader();
  await expressLoader(app);
  console.log('express loaded');
}
