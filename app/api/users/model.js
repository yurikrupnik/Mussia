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

export default mongoose.model('User', UserSchema);

