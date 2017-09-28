import {combineReducers} from 'redux';
import users from '../../api/users/reducer';
import results from '../../api/results/reducer';
import quizzes from '../../api/quizzes/reducer';
import errors from './../errors/reducer';

const reducers = {
    users,
    results,
    quizzes,
    errors
};

export default combineReducers(reducers);