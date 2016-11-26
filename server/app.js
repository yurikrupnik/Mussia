import express from 'express';
const app = express();
import router from './routes/index';
import webpack from './services/middlewares/webpack';
import bodyParser from './services/middlewares/bodyParser';
import views from './services/middlewares/views';
import db from './config/env/db'; // just loading it for connection

// views middleware
views(app);
// statics
app.use(express.static('client/public')); // must be before router
// webpack middleware
webpack(app); // test
bodyParser(app); // test
// router middleware
router(app); // test

export default app;
