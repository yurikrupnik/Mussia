import mongoose from 'mongoose';
let Schema = mongoose.Schema;
import db from '../../config/db';
export default db.get('users');

var schema = new Schema({
    email: String,
    name: String,
    hashPassword: String,
    // hasToken: Boolean,
    // id: Schema.Types.ObjectId,
    todos: []

});
// var Model = db.model('User', schema);

// export default mongoose.model('User', schema);

