import mongoose, { Schema } from 'mongoose';
import shortid from 'shortid';

const UserSchema = new Schema({
    id: {
        type: String,
        index: true
    },
    email: String,
    name: String,
    hashPassword: String,
});



const Model = mongoose.model('User', UserSchema);
export default Model;

// let testUser = new Model({id: 'test', email: 'test@test.com', name: 'test'});
// Model.findOne({id: 'test'}, function (err, doc) {
//     if (!doc) {
//         testUser.save();
//     }
// });
