import express from 'express';
const app = express();
import webpack from './services/middlewares/webpack';
import bodyParser from './services/middlewares/bodyParser';
import views from './services/middlewares/views';
import errors from './services/middlewares/errors';
import logger from './services/middlewares/logger';
import validator from './services/middlewares/validator';
import router from './services/middlewares/router';
import serveStatics from './services/middlewares/serveStatics';
import api from './services/middlewares/api';
import session from './services/middlewares/session';
import passport from './services/middlewares/passport';


logger(app);
app.enable('trust proxy');

app.set('x-powered-by', false);
app.set('view cache', true);
// app.set('trust proxy', 'loopback');
webpack(app); // test
serveStatics(app);
bodyParser(app);
session(app);
views(app);
validator(app);
passport(app);
api(app); // test
router(app);
errors(app);

export default app;
