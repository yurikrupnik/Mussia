import {SET_CURRENT, REMOVE_CURRENT} from './actions';

export default (state = {}, action) => {
    switch (action.type) {
        case SET_CURRENT:
            return action.payload;
        case REMOVE_CURRENT:
            return {};
        default:
            return state;
    }
};