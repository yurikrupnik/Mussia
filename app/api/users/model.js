import mongoose, {Schema} from 'mongoose';

var UserSchema = new Schema({
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
    }
    // hasToken: Boolean,
    // id: Schema.Types.ObjectId,
    // todos: [{
    //     comepleted: {
    //         type: Boolean,
    //         default: false
    //     },
    //     title: String,
    //     createdOn: {
    //         type: Date,
    //         default: Date.now
    //     }
    // }]

});

export default mongoose.model('User', UserSchema);

