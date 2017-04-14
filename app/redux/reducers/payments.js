import {REQUEST_PAYMENTS, RECEIVE_PAYMENTS, ERROR_PAYMENTS, actions} from '../actions/payments';
console.log('actions', actions);

let initialState = {
    data: [],
    isFetching: false,
    isReceived: false,
    askOnce: false,
    error: null
};

function createReducerByActions(actions) {
    return function (state = initialState, action) {
        console.log('actions', actions);

        let data = action.data;
        console.log('action.type', action.type);

        switch (action.type) {
            case REQUEST_PAYMENTS:
                return Object.assign({}, state, {isFetching: true});
            case RECEIVE_PAYMENTS:
                return Object.assign({}, state, {data, isFetching: false, isReceived: true});
            case ERROR_PAYMENTS:
                return Object.assign({}, state, {error: {fuck: true}});
            default:
                return state;
        }
    }
}

export default createReducerByActions(actions);
//
// export default (state = initialState, action) => {
//     let data = action.data;
//     switch (action.type) {
//         case REQUEST_PAYMENTS:
//             return Object.assign({}, state, {isFetching: true});
//         case RECEIVE_PAYMENTS:
//             return Object.assign({}, state, {data, isFetching: false, isReceived: true});
//         case ERROR_PAYMENTS:
//             return Object.assign({}, state, {error: {fuck: true}});
//         default:
//             return state;
//     }
// };


