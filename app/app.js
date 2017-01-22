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

import {databaseUrl} from './config/env';

let opts = {url: databaseUrl};
import session from 'express-session';
let MongoStore = require('connect-mongo')(session);
app.use(session({
    secret: 'slomo',
    saveUninitialized: false,
    resave: false,
    store: new MongoStore(opts)
}));

logger(app);
bodyParser(app);


// app.enable('trust proxy');
app.set('x-powered-by', false);
app.set('view cache', true);

validator(app);

serveStatics(app);

views(app);

webpack(app); // test

// =====================================
// FACEBOOK ROUTES =====================
// =====================================
// route for facebook authentication and login
import auth from './config/auth';
import passport from 'passport';
app.use(passport.initialize());
app.use(passport.session());
auth(passport);


api(app); // test

// login facebook
app.get('/auth/facebook', passport.authenticate('facebook'));
// handle the callback after facebook has authenticated the user
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/register'
    }));


router(app);

// errors
errors(app);

export default app;
