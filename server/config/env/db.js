import monk from 'monk';
import {databaseUrl} from '../../config/env';
// require('./seed');
const db = monk(databaseUrl);

db.then(() => {
    console.log('db connected to server')
});

export default db;



