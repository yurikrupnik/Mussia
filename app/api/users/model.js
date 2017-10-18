import mongoose, { Schema } from 'mongoose';
import { dbModel } from './config';
const UserSchema = new Schema({
    id: {
        type: String,
        index: true
    },
    email: {type: String},
    name: String,
    hashPassword: String,
});

const Model = mongoose.model(dbModel, UserSchema);

export {
    UserSchema
}
export default Model;
