import http from 'http'
import app from './app';
import './config/db'; // connect to mongo
import {connectToServer} from './services/socket/server';


let server = http.Server(app);
connectToServer(server);

export default server;