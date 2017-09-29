import shortid from 'shortid';
import UserModel from './users/model';
import QuizModel from './quizzes/model';
import ResultModel from './results/model';
import {quizzes, results, users} from './mock';

const saveManyByModel = (model, arr) => model.insertMany(arr).then(res => res);

const handleUsers = (res) => res.length ? res : saveManyByModel(UserModel, users);

const handleResults = (res) => ResultModel.find().then(response => {
    if (!response.length) {
        let {quizzes} = res;
        quizzes.forEach((quiz, i) => {
            let newQ = new ResultModel({
                quiz_id: quiz._id,
                user_id: res.userIds[i],
                answer_id: quiz.answers[i]._id
            });
            newQ.save(function (err, doc) {
                if (err) {
                    console.log('err', err);
                }
            });
        });
    }
});

const handleQuizzes = (userIds) => QuizModel.find().then(res => res.length ? {
        quizzes: res,
        userIds
    } : saveManyByModel(QuizModel, quizzes).then(response => ({
        quizzes: response,
        userIds,
    }))
);


const handleMock = () => UserModel.find({})
    .then(handleUsers)
    .then(handleQuizzes)
    .then(handleResults);


handleMock();