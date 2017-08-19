import {
    GET_GALLERIES,
    GET_GALLERIES_FULFILLED
} from './actions';


export default (state = { data: [], active: false }, action) => {
    switch (action.type) {
        case GET_GALLERIES:
            return Object.assign({}, state, { active: !state.active });
        case GET_GALLERIES_FULFILLED:
            return Object.assign({}, state, { active: !state.active, data: action.payload });
        default:
            return state;
    }
};