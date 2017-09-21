import mongoose, { Schema } from 'mongoose';

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

export {
    UserSchema
}
export default Model;
