import express from 'express';
const app = express();
import router from './routes/index';
import webpack from './config/webpack';
import bodyParser from './services/middlewares/bodyParser';
import views from './services/middlewares/views';
import db from './config/env/db'; // just loading it for connection

// views middleware
views(app);
// webpack middleware
webpack(app); // test
bodyParser(app); // test
// router middleware
app.use(express.static('client/public')); // must be before router
router(app); // test


export default app;
