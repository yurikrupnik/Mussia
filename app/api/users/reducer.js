import {combineReducers} from 'redux';
import createFetchingReducer from '../../redux/ui/isFetching';
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
    fetching: createFetchingReducer([FETCH_USERS_PENDING, FETCH_USERS_SUCCESS]),
    users
})
