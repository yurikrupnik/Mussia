import express from 'express';
const app = express();
import loadExpressMiddlewares from './services/express/middlewares/load';

loadExpressMiddlewares(app);

export default app;
