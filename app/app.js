import express from 'express';
import loadExpressMiddlewares from './services/express/middlewares/load';
const app = express();

loadExpressMiddlewares(app);

export default app;
