import {REQUEST_USER, RECEIVED_USER} from '../actions/user';

export default (state = null, action) => {

    switch (action.type) {
        case RECEIVED_USER:
            return Object.assign({}, state, action.user);
        // case RECEIVE_USER:
        //     return Object.assign({}, state, {user: action.user});
        default:
            return state;
    }
};


