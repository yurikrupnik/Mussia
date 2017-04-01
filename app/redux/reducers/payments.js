import {REQUEST_PAYMENTS, RECEIVE_PAYMENTS} from '../actions/payments';

// import {removeByIndex, incrementByIndex, decrementByIndex} from './util/util';
export default (state = {data: []}, action) => {
    let data = action.data;
    switch (action.type) {
        case REQUEST_PAYMENTS:
            return Object.assign({}, state);
        case RECEIVE_PAYMENTS:
            return Object.assign({}, state, {data});
        default:
            return state;
    }
};


