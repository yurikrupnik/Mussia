import UserModel from './users/model';
import QuizModel from './quizzes/model';
import ResultModel from './results/model';
import {user, quizzes} from './mock';

function handleMock() {
    UserModel.find({})
        .then(handleUsers)
        .then(handleQuizzes)
        .then(handleResults);
}

function handleResults(res) {
    return ResultModel.find().then(response => {
        if (!response.length) {
            res.quizzes.forEach(quiz => {
                let newQ = new ResultModel({
                    user_id: res.userId,
                    quiz_id: quiz._id,
                    answer_id: quiz.answers[0]._id
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

function handleQuizzes(userId) {
    return QuizModel.find().then(res => {
        if (!res.length) {
            return saveManyByModel(QuizModel, quizzes).then(response => {
                return {
                    quizzes: response,
                    userId,
                }
            });
        } else {
            return {quizzes: res, userId};
        }
    });
}

function handleUsers(users, user = user) {
    if (!users.length) {
        return saveUser(new UserModel(user));
    }
    return users[0].id;
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