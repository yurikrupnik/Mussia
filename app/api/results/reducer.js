import {GET_COUNT, GOT_COUNT, GET_ANSWER, GOT_ANSWER} from './actions';

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

        case GET_ANSWER:
            return state;
        case GOT_ANSWER:
            return state;
        default:
            return state;
    }
};