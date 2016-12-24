import mongoose from 'mongoose';
import {databaseUrl} from '../../config/env';
// import Promise from 'bluebird';
require('./seed');
//
// let query = Band.findOne({name: "Guns N' Roses"});
mongoose.Promise = global.Promise; // todo play with it
mongoose.connect(databaseUrl, []); // todo check errors
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to mongoose'));


// export default mongoose;

