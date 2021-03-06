import http from 'http'
import app from './app';
import connect from './services/node/socket/server';
import './config/mongoose'; // connect to db

let server = http.Server(app);
connect(server);

export default server;