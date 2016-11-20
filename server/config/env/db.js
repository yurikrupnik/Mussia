import mongoose from 'mongoose';
import {databaseUrl} from '../../config/env';
import Promise from 'bluebird';
require('./seed');
//
// mongoose.Promise = Promise;
// mongoose.connection.on('error', function (err) {
//     console.error('MongoDB connection error: ' + err);
//     process.exit(-1);
// });

export default mongoose.connect(databaseUrl, {});

