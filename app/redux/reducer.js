import {combineReducers} from 'redux';
import users from '../api/users/reducer';
import session from './config/session/reducer';
import results from '../api/results/reducer';
import quizzes from '../api/quizzes/reducer';
import errors from './errors/reducer';


const configReducer = combineReducers({
    session
});

const entitiesReducer = combineReducers({
    // session
});

const reducers = {
    config: configReducer,
    users,
    results,
    quizzes,
    errors
};

export default combineReducers(reducers);