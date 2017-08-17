import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    id: {
        type: String,
        index: true
    },
    email: {
        type: String,
    },
    name: String,
    hashPassword: String,
    picture: {
        data: {
            url: String
        }
    },
    searches: Schema.Types.ObjectId
});

export default mongoose.model('User', UserSchema);

