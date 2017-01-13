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

import fs from 'fs';

logger(app);
bodyParser(app);

import session from 'express-session';
import cookieParser from 'cookie-parser';
app.use(cookieParser());
app.use(session({
    secret: 'slomo',
    saveUninitialized: true,
    resave: true
}));

app.set('x-powered-by', false);
app.set('view cache', true);

app.use(function (req, res, next) {
    // console.log('req.session', req.session);
    // console.log('res.session', res.session);
    // console.log('req.session', req.cookies);
    // console.log('res.session', res.cookies);
    // console.log('req.url', req.url);

    if (/public/.test(req.url)) {

    } else {
        next();
    }
});


validator(app);

serveStatics(app);

views(app);
webpack(app); // test

api(app); // test

router(app);

// errors
errors(app);

export default app;
