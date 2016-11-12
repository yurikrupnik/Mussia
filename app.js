import express from 'express';
import path from 'path';
const app = express();
import {routes} from './routes/index';


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});


export default app;