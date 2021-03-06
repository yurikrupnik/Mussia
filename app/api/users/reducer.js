import {combineReducers} from 'redux';
// import current from '../../redux/ui/current/reducer';
import createLoadingWithNamedType from '../../redux/api/Loader/reducer';
import {clientModel} from './config';

import {
    FETCH_USERS_PENDING,
    FETCH_USERS_SUCCESS,
} from './actions';

const data = (state = {result: [], entities: {}}, action) => {
    switch (action.type) {
        case FETCH_USERS_PENDING:
            return Object.assign({}, state, {
                result: action.payload.result,
                entities: action.payload.entities
            });
        case FETCH_USERS_SUCCESS:
        default:
            return state;
    }
};


export default combineReducers({
    loading: createLoadingWithNamedType(clientModel),
    // current,
    data,
});
