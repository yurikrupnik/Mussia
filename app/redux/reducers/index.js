import {combineReducers} from 'redux';
import counter from './counter';
import counters from './counters';
import user from './user';
import errors from './errors';

const reducers = {
    user,
    counter,
    counters,
    errors
};

export default combineReducers(reducers);