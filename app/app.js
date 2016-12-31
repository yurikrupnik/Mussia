import express from 'express';
const app = express();
import webpack from './services/middlewares/webpack';
import bodyParser from './services/middlewares/bodyParser';
import views from './services/middlewares/views';
import errors from './services/middlewares/errors';
import logger from './services/middlewares/logger';
import validator from './services/middlewares/validator';

import api from './api';

import routerMiddleware from './Router/middleware'



// todo try different tactic not use functions as middlewares
logger(app);
bodyParser(app);

import session from 'express-session';
import cookieParser from 'cookie-parser';
app.use(cookieParser());
app.use(session({
    secret: 'avi',
    saveUninitialized: true,
    resave: true
}));

validator(app);

app.use(express.static('client/public')); // must be before router
views(app);
webpack(app); // test

// todo user-agent for materuak ui



api(app); // test
// errors
app.get('*', routerMiddleware);
errors(app);

export default app;
