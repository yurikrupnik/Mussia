import express from 'express';
const app = express();
import router from './routes/index';
// import error from './routes/error';
import webpack from './config/webpack';

app.use(express.static('client/public'));
app.use('/', router); // all routes
app.use(webpack); // webpack middle wares


import path from 'path';
import config from './config/env';
let error = (req, res) => {
    res.status(404).sendFile(path.join(config.root, 'views/404.html'));
    // res.sendFile(path.join(config.root, 'views/404.html'));
};
app.use('*', error);
export default app;


