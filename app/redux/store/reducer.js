import {combineReducers} from 'redux';
import user from './../user/reducer';
import searchers from './../searchers/reducer';
import errors from './../errors/reducer';

const reducers = {
    user,
    searchers,
    errors
};

export default combineReducers(reducers);