import {GET_COUNT, GOT_COUNT} from './actions';

// To Be Added - finish reducer
export default (state = { data: [], active: false }, action) => {
    switch (action.type) {
        case GET_COUNT:
            return Object.assign({}, state, {
                active: !state.active,
            });
        case GOT_COUNT:
            return Object.assign({}, state, {
                active: !state.active,
                data: action.payload
            });
        default:
            return state;
    }
};