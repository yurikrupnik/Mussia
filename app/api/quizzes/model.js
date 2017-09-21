import mongoose, { Schema } from 'mongoose';
import { model } from './config';
import { AnswerSchema } from '../answers/model';
import { quizzes } from '../mock';

const QuizzesSchema = Schema({
    quizId: {
        type: Number,
        index: true
    },
    question: String,
    answersIds: [{type: Number, ref: AnswerSchema}]
    // created: Date, // To Be Added
    // expired: Date, // To Be Added
});

const Model = mongoose.model(model, QuizzesSchema);

Model.find({}) // create collection from mock
    .then(function (res) {
        if (!res.length) {
            quizzes.forEach(quiz => {
                let newQuiz = new Model(quiz);
                newQuiz.save(function (err, doc) {
                    if (err) {
                        console.log('err', err);
                    }
                });
            });
        }
    });

export {
    QuizzesSchema
}

export default Model;
