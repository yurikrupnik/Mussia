import {host} from '../../../config/env'
import io from 'socket.io-client';

let socket = io.connect(host, {reconnect: true});

export default socket;