import http from 'http'
import app from './app';
import './config/db'; // connect to mongo
import connect from './services/socket/server';

let server = http.Server(app);
connect(server);

export default server;