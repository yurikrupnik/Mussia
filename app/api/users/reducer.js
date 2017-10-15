import {combineReducers} from 'redux';
import createIsFetchingReducer from '../../redux/ui/isfetching';

import {
    SET_CURRENT_USER,
    FETCH_USERS_PENDING,
    FETCH_USERS_SUCCESS
} from './actions';

const users = (state = {result: {}, entities: {}, currentUser: {}}, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return Object.assign({}, state, {currentUser: action.payload});
        case FETCH_USERS_SUCCESS:
            return Object.assign({}, state, {
                active: !state.active,
                result: action.payload.result,
                entities: action.payload.entities
            });
        case FETCH_USERS_PENDING:
        default:
            return state;
    }
};

export default combineReducers({
    isFetching: createIsFetchingReducer([FETCH_USERS_PENDING, FETCH_USERS_SUCCESS]),
    users
})
