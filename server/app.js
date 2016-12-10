import express from 'express';
const app = express();
import router from './routes/index';
import webpack from './services/middlewares/webpack';
import bodyParser from './services/middlewares/bodyParser';
import views from './services/middlewares/views';
import errors from './services/middlewares/errors';
import expressValidator from 'express-validator';

import cookieParser from 'cookie-parser';

// import cookieSession from 'cookie-session';
app.use(cookieParser());

bodyParser(app); // test
app.use(expressValidator());
// statics
app.use(express.static('client/public')); // must be before router
// views middleware
views(app);
// webpack middleware
webpack(app); // test
// routes
router(app); // test
// errors
errors(app);

export default app;
