import { Router, Request, Response } from 'express';

const route = Router();

export default (app: Router) => {
  app.use('/health', route);

  route.get('/', async (req: Request, res: Response) => {
    return res.status(200).send('health check success');
  })
}
