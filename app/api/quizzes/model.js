import mongoose, { Schema } from 'mongoose';
import { model } from './config';

const AnswerSchema = Schema({
    label: String
});

const QuizzesSchema = Schema({
    label: String,
    answers: [AnswerSchema]
    // created: Date, // To Be Added
    // expired: Date, // To Be Added
});

const Model = mongoose.model(model, QuizzesSchema);

Model.find({_id: '59cae9a6f984b64732115ca3'}).then(res => {
    console.log('res', res);

})

export {
    QuizzesSchema,
    AnswerSchema
}

export default Model;
