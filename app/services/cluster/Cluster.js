import server from '../../server';
import {port, host} from '../../config/env';

import cluster from 'cluster'
import os from 'os';
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
// Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        console.log('i', i);

        cluster.fork();
    }
} else {
    server.listen(port, () => console.log(`Listening on: ${host}`));
}

cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
});