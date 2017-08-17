import {model} from './config';
import mongoose, {Schema} from 'mongoose';
import shortid from 'shortid';

let SearchesSchema = Schema({
    userId: {
        type: String,
        // default: shortid.generate,
        index: true
    },
    query: {
        type: String,
        default: '',
        required: [true, 'must have query']
    },
    service: {
        type: String,
        required: [true, 'must have company'],
        default: 'default comoany'
    },
    time: {
        type: Number,
        required: [true, 'must be in range of 1 and 100'],
        min: [1, 'No amount selected'],
        max: [100, 'Maximum amount is 100 for regular customer'],
        default: 1,
        step: 1
    },

    amount: {
        type: Number
    }
});

export default mongoose.model(model, SearchesSchema);