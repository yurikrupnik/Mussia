import {
    CREATE_PAYMENTS_FULFILLED,
    CREATE_PAYMENTS_PENDING,
    CREATE_PAYMENTS_REJECTED,
    READ_PAYMENTS_FULFILLED,
    READ_PAYMENTS_PENDING,
    READ_PAYMENTS_REJECTED,
    DELETE_PAYMENTS_FULFILLED,
    DELETE_PAYMENTS_PENDING,
    DELETE_PAYMENTS_REJECTED
} from './actions';
import _ from 'lodash';
// import {received_error
// } from './actions';

const initialState = [];
// {
//     data: [],
//     active: false,
//     error: null
// };
export default (state = [], action) => {

    switch (action.type) {
        // read
        case READ_PAYMENTS_PENDING:
            // return [...state, action.payload];
            return [...state];
        case READ_PAYMENTS_FULFILLED:
            return [...action.payload];
        // case READ_PAYMENTS_REJECTED:
        //     return Object.assign({}, state, action);
        // delete
        case DELETE_PAYMENTS_FULFILLED:
            return _.filter(state, v => !_.includes(action.payload, v.id));
        case DELETE_PAYMENTS_PENDING:
            return [...state];
        // case DELETE_PAYMENTS_REJECTED:
        //     return Object.assign({}, state, action);
        // // create
        case CREATE_PAYMENTS_FULFILLED:
            return [...state, action.payload];
        case CREATE_PAYMENTS_PENDING:
            return [...state];
        // case CREATE_PAYMENTS_REJECTED:
        //     return Object.assign({}, state, action);
        default:
            return state;
    }
};