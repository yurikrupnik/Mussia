import server from '../../../server';
import {port, host} from '../../../config/env';
import cluster from 'cluster'
import os from 'os';


if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    // Fork workers.
    let numCPUs = os.cpus().length;
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    server.listen(port, () => console.log(`Listening on: ${host}`));
    console.log(`Worker ${process.pid} started`);
}

cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
});

