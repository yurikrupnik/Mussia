import counter from './counter';
import counters from './counters';
// import payments from '../../api/payments/reducer';
import payments from './payments';

// import sluts from './sluts';
import user from './user';
import errors from './errors';
import {combineReducers} from 'redux';

const reducers = {
    user,
    counters,
    counter,
    payments,
    // sluts,
    errors
};

export default combineReducers(reducers);