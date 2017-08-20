import server from './server';
import {port, host} from './config/env';

// in production use clusters
// import './services/node/cluster/Cluster'; // socket fails todo
server.listen(port, () => console.log(`Listening on: ${host}`));

