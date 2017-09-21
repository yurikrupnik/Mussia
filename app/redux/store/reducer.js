import {combineReducers} from 'redux';
import user from './../user/reducer';
import votes from '../../api/votes/reducer';
import quizzes from '../../api/quizzes/reducer';
import answers from '../../api/answers/reducer';
import errors from './../errors/reducer';

const reducers = {
    user,
    votes,
    answers,
    quizzes,
    errors
};

export default combineReducers(reducers);