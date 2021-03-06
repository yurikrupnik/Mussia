import mongoose, { Schema } from 'mongoose';
import { dbModel } from './config';
import { QuizzesSchema, AnswerSchema } from '../quizzes/model';
import { UserSchema } from '../users/model';

let ResultsSchema = Schema({
    quiz_id: {type: Schema.Types.ObjectId, ref: QuizzesSchema},
    user_id: {type: Schema.Types.String, ref: UserSchema},
    answer_id: {type: Schema.Types.ObjectId, ref: AnswerSchema, index: true}
});

let Model = mongoose.model(dbModel, ResultsSchema);

export {
    ResultsSchema
}

export default Model;
