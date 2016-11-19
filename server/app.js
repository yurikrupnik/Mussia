import express from 'express';
const app = express();
import router from './routes/index';
import webpack from './config/webpack';

app.set('view', 'html');
app.use(express.static('client/public'));

// webpack middleware
app.use(webpack);

// routes
app.use('/', router); // all routes

export default app;
