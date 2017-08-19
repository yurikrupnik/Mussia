import {combineReducers} from 'redux';
import user from './../user/reducer';
import searchers from './../searchers/reducer';
import galleries from './../galleries/reducer';
import errors from './../errors/reducer';

const reducers = {
    user,
    galleries,
    searchers,
    errors
};

export default combineReducers(reducers);