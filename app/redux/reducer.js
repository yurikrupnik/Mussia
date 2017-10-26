import {combineReducers} from 'redux';
import configReducer from './config';

import users from '../api/users/reducer';
import results from '../api/results/reducer';
import quizzes from '../components/views/quizzes/reducer';
import errors from './errors/reducer';

const reducers = {
    config: configReducer,
    users,
    quizzes,
    results,
    errors
};

export default combineReducers(reducers);