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

export {
    QuizzesSchema,
    AnswerSchema
}

export default Model;
