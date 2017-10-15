import {combineReducers} from 'redux';
import users from '../../api/users/reducer';
import results from '../../api/results/reducer';
import quizzes from '../../api/quizzes/reducer';
import errors from './../errors/reducer';
// import session from '../config/session';

const reducers = {
    users,
    // session,
    results,
    quizzes,
    errors
};

export default combineReducers(reducers);