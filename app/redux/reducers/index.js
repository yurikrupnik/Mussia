import counter from './counter';
import counters from './counters';
// import payments from '../../api/payments/reducer';
import payments from '../data/payments/reducer';
import friends from '../data/friends/reducer';

// import sluts from './sluts';
import user from './user';
import errors from './errors';
import {combineReducers} from 'redux';

const reducers = {
    user,
    counters,
    counter,
    payments,
    friends,
    // sluts,
    errors
};

export default combineReducers(reducers);