import monk from 'monk';
import {databaseUrl} from './env';
// require('./seed');
const db = monk(databaseUrl);

function getModelByName(name) {
    return db.get(name);
}

db.then(() => {
    console.log('db connected to server')
});

export default db;


export {
    getModelByName
}



