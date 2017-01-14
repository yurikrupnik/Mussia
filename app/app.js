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


// =====================================
// FACEBOOK ROUTES =====================
// =====================================
// route for facebook authentication and login
import auth from './config/auth';
import passport from 'passport';
auth(passport);
app.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));

// handle the callback after facebook has authenticated the user
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/profile',
        failureRedirect: '/'
    }));


app.use(function (req, res, next) {
    next();
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
