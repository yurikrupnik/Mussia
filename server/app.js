import express from 'express';
const app = express();
import router from './routes/index';
import webpack from './services/middlewares/webpack';
import bodyParser from './services/middlewares/bodyParser';
import views from './services/middlewares/views';
import errors from './services/middlewares/errors';

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
// routes
router(app); // test
// errors
errors(app);

export default app;
