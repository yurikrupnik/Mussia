import {combineReducers} from 'redux';
import configReducer from './config';

import users from '../api/users/reducer';
import results from '../api/results/reducer';
import quizzes from '../components/routes/quizzes/reducer';
import errors from './errors/reducer';


const apiReducer = combineReducers({
    users,
    quizzes,
    results,
});

const reducers = {
    config: configReducer,
    api: apiReducer,
    errors
};

export default combineReducers(reducers);