import shortid from 'shortid';
import UserModel from './users/model';
import QuizModel from './quizzes/model';
import ResultModel from './results/model';
import {quizzes, results, users} from './mock';

function handleMock() {
    UserModel.find({})
        .then(handleUsers)
        .then(handleQuizzes)
        .then(handleResults);
}

function handleUsers(res) {
    if (!res.length) {
        return saveManyByModel(UserModel, users)
    }
    return res[0].id;
}

function handleResults(res) {
    return ResultModel.find().then(response => {
        if (!response.length) {
            console.log('res.quizzes', res.quizzes);

            res.quizzes.forEach((quiz, i) => {
                // let votes = _.times(10).map(v => {
                //     console.log('quizzes[i]._id', quizzes[i]._id);
                //     console.log('res.userIds[_.random(0, quiz.userIds.length)]', res.userIds[_.random(0, quiz.userIds.length)]);
                //     console.log('quiz.answers[_.random(0, quiz.answers.length)]', quiz.answers[_.random(0, quiz.answers.length)]);
                //     return new ResultModel({
                //         quiz_id: quizzes[i]._id,
                //         user_id: res.userIds[_.random(0, quiz.userIds.length)],
                //         answer_id: quiz.answers[_.random(0, quiz.answers.length)]
                //         quiz_id: quiz._id,
                //         user_id: res.userIds[i],
                //         answer_id: quiz.answers[i]._id
                    // });
                    // return {
                    //
                    // }
                // });
                // console.log('votes', votes);

                // votes.map()
                // return saveManyByModel(ResultModel, votes);
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
}

function handleQuizzes(userIds) {
    return QuizModel.find().then(res => {
        if (!res.length) {
            return saveManyByModel(QuizModel, quizzes).then(response => {
                return {
                    quizzes: response,
                    userIds,
                }
            });
        } else {
            return {quizzes: res, userIds};
        }
    });
}

function saveManyByModel(model, arr) {
    return model.insertMany(arr).then(res => res);
}

function saveUser(user) {
    return user.save()
        .then(res => res.id)
        .catch(err => console.log('err', err));
}

handleMock();