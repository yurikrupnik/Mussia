import {REQUEST_PAYMENTS, RECEIVE_PAYMENTS} from '../actions/payments';

// import {removeByIndex, incrementByIndex, decrementByIndex} from './util/util';
export default (state = {isFetching: false, items: []}, action) => {

    switch (action.type) {
        case REQUEST_PAYMENTS:
            return Object.assign({}, state, {isFetching: !state.isFetching});
        case RECEIVE_PAYMENTS:
            return Object.assign({}, state, {isFetching: !state.isFetching, items: action.items});
        default:
            return state;
    }
};


