import {combineReducers} from 'redux';
import createIsFetchingReducer from '../../redux/ui/isFetching/reducer';
import current from '../../redux/ui/current/reducer';

import {
    FETCH_USERS_PENDING,
    FETCH_USERS_SUCCESS,
} from './actions';

const data = (state = {result: {}, entities: {}}, action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return Object.assign({}, state, {
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
    current,
    data,
})
