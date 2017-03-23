import monk from 'monk';
import {databaseUrl} from './env';
// require('./seed');
const db = monk(databaseUrl);

db.then(() => {
    console.log('db connected to server')
});

export default db;



