import {LOGOUT, RECEIVED_USER} from '../actions/user';

export default (state = null, action) => {

    switch (action.type) {
        case RECEIVED_USER:
            return Object.assign({}, state, action.user);
        case LOGOUT:
            return Object.assign({}, state, {user: null});
        default:
            return state;
    }
};


