import mongoose, { Schema } from 'mongoose';
import { model } from './config';
const UserSchema = new Schema({
    id: {
        type: String,
        index: true
    },
    email: {type: String},
    name: String,
    hashPassword: String,
});

const Model = mongoose.model(model, UserSchema);

export {
    UserSchema
}
export default Model;
