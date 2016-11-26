import express from 'express';
const app = express();
import router from './routes/index';
import webpack from './config/webpack';
import db from './config/env/db'; // just loading it for connection
import bodyParser from 'body-parser';
app.set('view', 'html');
app.use(express.static('client/public'));
app.use(bodyParser.json());

// webpack middleware
webpack(app);
// router middleware
router(app);


export default app;
