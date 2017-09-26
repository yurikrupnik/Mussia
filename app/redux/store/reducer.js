import {combineReducers} from 'redux';
import user from './../user/reducer';
import results from '../../api/results/reducer';
import quizzes from '../../api/quizzes/reducer';
import errors from './../errors/reducer';

const reducers = {
    user,
    results,
    quizzes,
    errors
};

export default combineReducers(reducers);