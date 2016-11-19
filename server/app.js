import express from 'express';
const app = express();
import router from './routes/index';
import webpack from './config/webpack';

app.use(express.static('client/public'));
app.use('/', router); // all routes
app.use(webpack); // webpack middle wares
export default app;


