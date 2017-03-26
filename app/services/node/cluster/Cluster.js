import server from '../../../server';
import {port, host} from '../../../config/env';

import cluster from 'Cluster'
console.log('cluster', cluster);

import os from 'os';


if (cluster.isMaster) {
    // Fork workers.
    let numCPUs = os.cpus().length;
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    server.listen(port, () => console.log(`Listening on: ${host}`));
}

cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
});