import express from 'express';
const app = express();
import router from './routes/index';
import webpack from './services/middlewares/webpack';
import bodyParser from './services/middlewares/bodyParser';
import views from './services/middlewares/views';
import './config/env/db'; // just loading it for connection

import cookieParser from 'cookie-parser';
// import cookieSession from 'cookie-session';

app.use(cookieParser());
// views middleware
views(app);
// statics
app.use(express.static('client/public')); // must be before router
// webpack middleware
webpack(app); // test
bodyParser(app); // test
// demo for middlewares
/*let logger = (req, res, next) => {
 console.log('body 1');
 next();
 };
 app.post('/users', logger);
 app.use((req, res, next) => {
 console.log('req.url', req.url);
 next();
 });*/

// router middleware
router(app); // test

export default app;
