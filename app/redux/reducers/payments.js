import {
    CREATE_PAYMENTS_FULFILLED,
    CREATE_PAYMENTS_PENDING,
    CREATE_PAYMENTS_REJECTED,
    READ_PAYMENTS_FULFILLED,
    READ_PAYMENTS_PENDING,
    READ_PAYMENTS_REJECTED
} from '../actions/payments';
import {received_error
} from '../actions/errors';

const initialState = {
    data: [],
    active: false,
    // error: null
};
export default (state = initialState, action) => {

    switch (action.type) {
        case READ_PAYMENTS_PENDING:
            console.log('action', action);
            return Object.assign({}, state, {active: true, body: action.body});
        case READ_PAYMENTS_FULFILLED:
            console.log('action', action);
            debugger;
            return Object.assign({}, state, {active: false, data: action.payload});
        case READ_PAYMENTS_REJECTED:
            console.log('action', action);
            return Object.assign({}, state, action);
        default:
            return state;
    }
};
