import mongoose from 'mongoose';
import {databaseUrl} from './env';
mongoose.connect(databaseUrl);
let db = mongoose.connection;
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

export default db;