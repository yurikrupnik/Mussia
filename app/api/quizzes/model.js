import mongoose, { Schema } from 'mongoose';
import { dbModel } from './config';

const AnswerSchema = Schema({
    label: String
});

const QuizzesSchema = Schema({
    label: String,
    answers: [AnswerSchema]
    // created: Date, // To Be Added
    // expired: Date, // To Be Added
});

const Model = mongoose.model(dbModel, QuizzesSchema);

export {
    QuizzesSchema,
    AnswerSchema
}

export default Model;
