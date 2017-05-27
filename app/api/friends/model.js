
import {model} from './config';
import mongoose, {Schema} from 'mongoose';


var FriendSchema= Schema({
    // _id: {
    //     type: String,
    // },
    name: {
        type: String,
        required: [true, 'must have name']
    },
    age: {
        type: Number,
        required: true,
        min: [1, 'No amount selected'],
        max: [100, 'Maximum amount is 100 for regular customer'],
        default: 35,
        step: 1
    },
    genre: {
        type: String,
        enum: ['female', 'male']
    }
});

let FriendModel = mongoose.model(model, FriendSchema);


export default FriendModel;