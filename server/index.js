import server from './server';
import {port, host} from './config/env';

server.listen(port, () => console.log(`Listening on: ${host}`));

