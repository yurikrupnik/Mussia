import counter from './counter';
import counters from './counters';
import payments from './payments';
import user from './user';
import errors from './errors';
import loading from './loading';
import {combineReducers} from 'redux';

const reducers = {
    user,
    counters,
    counter,
    payments,
    loading,
    errors
};

export default combineReducers(reducers);