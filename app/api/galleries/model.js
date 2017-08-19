import {model} from './config';
import mongoose, {Schema} from 'mongoose';

let PhotosSchema = Schema({
    user_id: {
        type: String,
        required: [true, 'must have user id'],
        index: true
    },
    tag: {
        type: String,
        required: [true, 'must have tag']
    },
    service: {
        type: String,
        default: 'flickr'
    },
    time: {
        type: Date,
        default: Date.now,
    },
    total: {
        type: Number,
        default: 0,
        required: [true, 'must have total']
    },
    perpage: {
        type: Number,
        default: 100
    },
    pages: {
        type: Number,
        default: '0'
    },
    page: {
        type: Number,
        default: 1
    },
    photo: []
});

export default mongoose.model(model, PhotosSchema);
