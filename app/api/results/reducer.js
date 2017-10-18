import {combineReducers} from 'redux';
import {GET_COUNT, GOT_COUNT, GET_ANSWER, GOT_ANSWER} from './actions';
import createLoadingWithNamedType from '../../redux/api/Loader/reducer';
import {clientModel} from './config';
// To Be Added - finish reducer
const data =  (state = { data: [] }, action) => {
    switch (action.type) {
        case GET_COUNT:
            return Object.assign({}, state, {
                active: !state.active,
            });
        case GOT_COUNT:
            return Object.assign({}, state, {
                active: !state.active,
                data: action.payload
            });

        case GET_ANSWER:
            return state;
        case GOT_ANSWER:
            return state;
        default:
            return state;
    }
};

export default combineReducers({
    loading: createLoadingWithNamedType(clientModel),
    // current,
    data,
});