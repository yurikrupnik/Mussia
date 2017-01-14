import counter from './counter';
import counters from './counters';
import payments from './payments';
import user from './user';
import {combineReducers} from 'redux';

const reducers = {
    user,
    counters,
    counter,
    payments
};

export default combineReducers(reducers);