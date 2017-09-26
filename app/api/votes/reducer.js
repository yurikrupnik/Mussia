import {GET_VOTES, GOT_VOTES} from './actions';

// To Be Added - finish reducer
export default (state = { data: [], active: false }, action) => {
    switch (action.type) {
        case GET_VOTES:
            return Object.assign({}, state, { active: !state.active });
        case GOT_VOTES:
            return Object.assign({}, state, {
                active: !state.active,
                data: action.payload
            });
        default:
            return state;
    }
};