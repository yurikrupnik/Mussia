import counter from './counter';
import counters from './counters';
import payments from './payments';
import user from './user';
import errors from './errors';
import {combineReducers} from 'redux';

const reducers = {
    user,
    counters,
    counter,
    payments,
    errors
};

export default combineReducers(reducers);