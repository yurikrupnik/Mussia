import express from 'express';
const app = express();
import router from './routes/index';
import webpack from './config/webpack';

import path from 'path';
import favicon from 'serve-favicon';

app.use(express.static('client/public'));
app.use('/', router); // all routes
app.use(webpack); // webpack middle wares
app.use(favicon(path.join(__dirname, '../client/public/IF-pin1.png')));
export default app;


