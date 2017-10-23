import express from 'express';
import loadExpressMiddlewares from './express/load';

const app = express();
loadExpressMiddlewares(app);

export default app;
