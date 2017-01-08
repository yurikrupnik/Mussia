import counter from './counter';
import counters from './counters';
import payments from './payments';
import {combineReducers} from 'redux';

const reducers = {
    // todos,
    counters,
    counter,
    payments
};

export default combineReducers(reducers);