import {GET_RESULTS, GOT_RESULTS} from './actions';

// To Be Added - finish reducer
export default (state = { data: [], active: false }, action) => {
    switch (action.type) {
        case GET_RESULTS:
            return Object.assign({}, state, {
                active: !state.active,
            });
        case GOT_RESULTS:
            return Object.assign({}, state, {
                active: !state.active,
                data: action.payload
            });
        default:
            return state;
    }
};