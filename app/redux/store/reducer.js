import {combineReducers} from 'redux';
import user from './../user/reducer';
import comments from './../comments/reducer';
import errors from './../errors/reducer';

const reducers = {
    user,
    comments,
    errors
};

export default combineReducers(reducers);