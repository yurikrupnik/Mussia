import {LOGOUT, RECEIVED_USER} from './actions';

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVED_USER:
            return Object.assign({}, state, action.user);
        case LOGOUT:
            return {};
        default:
            return state;
    }
};


