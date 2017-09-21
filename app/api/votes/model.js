import mongoose, { Schema } from 'mongoose';
import { model } from './config';
import { AnswerSchema } from '../answers/model';
import { QuizzesSchema } from '../quizzes/model';
import { UserSchema } from '../users/model';
import { votes } from '../mock';

let VotesSchema = Schema({
    quizId: {type: Number, ref: QuizzesSchema, index: true},
    meta: [{
        answerId: {type: Number, ref: AnswerSchema},
        votes: [{type: String, ref: UserSchema}]
    }]
});

let Model = mongoose.model(model, VotesSchema);

Model.find({}) // create collection from mock
    .then(function (res) {
        if (!res.length) {
            votes.forEach(vote => {
                let newVote = new Model(vote);
                newVote.save(function (err, doc) {
                    if (err) {
                        console.log('err', err);
                    }
                });
            });
        }
    });

export {
    VotesSchema
}

export default Model;
