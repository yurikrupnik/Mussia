import mongoose, { Schema } from 'mongoose';
import { model } from './config';
import { QuizzesSchema, AnswerSchema } from '../quizzes/model';
import { UserSchema } from '../users/model';

let ResultsSchema = Schema({
    quiz_id: {type: Schema.Types.ObjectId, ref: QuizzesSchema, index: true},
    user_id: {type: Schema.Types.String, ref: UserSchema},
    answer_id: {type: Schema.Types.ObjectId, ref: AnswerSchema},
    // answer_label: {type: Schema.Types.String, ref: AnswerSchema}
});

let Model = mongoose.model(model, ResultsSchema);

export {
    ResultsSchema
}

export default Model;
