import mongoose from 'mongoose';
import {databaseUrl} from '../../config/env';
// import Promise from 'bluebird';
require('./seed');
//
// let query = Band.findOne({name: "Guns N' Roses"});
mongoose.Promise = global.Promise;
// mongoose.setPromise(global.Promise);
// assert.equal(query.exec().constructor, global.Promise);
// mongoose.connection.on('error', function (err) {
//     console.error('MongoDB connection error: ' + err);
//     process.exit(-1);
// });
//
// mongoose.connection.on('data', function (err) {
//     console.error('MongoDB connection data: ' + err);
//     // process.exit(-1);
// });

export default mongoose.connect(databaseUrl, []); // todo check errors

