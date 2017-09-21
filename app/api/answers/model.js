import { model } from './config';
import mongoose, { Schema } from 'mongoose';
import { answers } from '../mock';

const AnswerSchema = Schema({
    answerId: {
        type: Number,
        index: true,

    },
    text: String
});

const Model = mongoose.model(model, AnswerSchema);

Model.find({}) // create collection from mock
    .then(function (res) {
        if (!res.length) {
            answers.forEach(answer => {
                let newAnswer = new Model(answer);
                newAnswer.save(function (err, doc) {
                    if (err) {
                        console.log('err', err);
                    }
                });
            });
        }
    });

export {
    AnswerSchema
}

export default Model;
