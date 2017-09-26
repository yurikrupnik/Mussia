import mongoose, { Schema } from 'mongoose';
import { model } from './config';
const UserSchema = new Schema({
    id: {
        type: String,
        index: true,
        required: [true, 'must give user id']
    },
    email: {type: String, required: [true, 'must give user email']},
    name: String,
    hashPassword: String,
});

const Model = mongoose.model(model, UserSchema);

export {
    UserSchema
}
export default Model;
