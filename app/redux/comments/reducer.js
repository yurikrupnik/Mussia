import {
    GET_COMMENTS,
    GET_COMMENTS_FULFILLED
} from './actions';


export default (state = { data: [], active: false }, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return Object.assign({}, state, { active: !state.active });
        case GET_COMMENTS_FULFILLED:
            return Object.assign({}, state, { active: !state.active, data: action.payload });
        default:
            return state;
    }
};