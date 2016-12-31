import express from 'express';
const app = express();
import router from './routes/index';
import webpack from './services/middlewares/webpack';
import bodyParser from './services/middlewares/bodyParser';
import views from './services/middlewares/views';
import errors from './services/middlewares/errors';
import logger from './services/middlewares/logger';

import session from 'express-session';

import cookieParser from 'cookie-parser';

// todo try different tactic not use functions as middlewares


// import cookieSession from 'cookie-session';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router'
import {routes} from './components/App/App';


logger(app);
bodyParser(app);

app.use(cookieParser());
app.use(session({
    secret: 'avi',
    saveUninitialized: true,
    resave: true
}));

import expressValidator from 'express-validator';
app.use(expressValidator());

// statics
// app.use(express.static('client/public')); // must be before router
// views middleware
views(app);
// webpack middleware
webpack(app); // test
// logger
// routes

// todo user-agent for materuak ui



router(app); // test
// errors
app.use((req, res, next) => {
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            // You can also check renderProps.components or renderProps.routes for
            // your "not found" component or route respectively, and send a 404 as
            // below, if you're using a catch-all route.
            let app = renderToString(
                <RouterContext {...renderProps}/>
            );
            let title = req.url;
            res.locals = {app, title};
            res.status(200);
            res.render('index');
        } else {
            res.status(404).send('Not found')
        }
    });
});
errors(app);

export default app;
