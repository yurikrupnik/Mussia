import {LOGOUT, RECEIVED_USER} from '../actions/user';

export default (state = {}, action) => {

    switch (action.type) {
        case RECEIVED_USER:
            console.log('action.user', action.user);
            return Object.assign({}, state, action.user);
        case LOGOUT:
            return null;
        default:
            return state;
    }
};


