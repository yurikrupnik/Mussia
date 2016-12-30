import express from 'express';
const app = express();
import router from './routes/index';
import webpack from './services/middlewares/webpack';
import bodyParser from './services/middlewares/bodyParser';
import views from './services/middlewares/views';
import errors from './services/middlewares/errors';
import expressValidator from 'express-validator';

import session from 'express-session';
import morgan from 'morgan';

import cookieParser from 'cookie-parser';

// todo try different tactic not use functions as middlewares


// import cookieSession from 'cookie-session';

app.use(morgan('dev'));
bodyParser(app); // test

app.use(cookieParser());
app.use(session({
    secret: 'avi',
    saveUninitialized: true,
    resave: true
}));
app.use(expressValidator());

// statics
app.use(express.static('client/public')); // must be before router
// views middleware
views(app);
// webpack middleware
webpack(app); // test
// logger
// routes

// todo user-agent for materuak ui


router(app); // test
// errors
errors(app);

export default app;
