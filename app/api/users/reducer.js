import {SET_CURRENT_USER_ID} from './actions';

export default (state = {users: [], currentUser: {}}, action) => {
    switch (action.type) {
        case SET_CURRENT_USER_ID:
            return Object.assign({}, state, {currentUser: action.payload});
            // return action.payload || '';
        // case LOGOUT:
        //     return {};
        default:
            return state;
    }
};


