import http from 'http'
import app from './app';
import './config/mongoose'; // connect to db
import connect from './services/node/socket/server';

let server = http.Server(app);
connect(server);

export default server;