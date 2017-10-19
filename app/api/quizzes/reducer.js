import {combineReducers} from 'redux';
// import createIsFetchingReducer from '../../redux/ui/isFetching/reducer';
// import current from '../../redux/ui/current/reducer';
import createLoadingWithNamedType from '../../redux/api/Loader/reducer';
import {clientModel} from './config';
import {
    READ_QUIZZES_PENDING,
    READ_QUIZZES_SUCCESS,
    READ_QUIZZES_FAIL,
    GET_SELECTED_QUIZ,
    GOT_SELECTED_QUIZ,
    SET_SELECTED
} from './actions';

// export const READ_QUIZZES_PENDING = `${READ}_${clientModel}_${PENDING}`;
// export const READ_QUIZZES_SUCCESS = `${READ}_${clientModel}_${SUCCESS}`;
// export const READ_QUIZZES_FAIL = `${READ}_${clientModel}_${FAIL}`;

const data = (state = {result: [], entities: {}, params: {}}, action) => {
    switch (action.type) {
        case READ_QUIZZES_PENDING:
            return Object.assign({}, state, {params: action.params});
        case READ_QUIZZES_SUCCESS:
            return Object.assign({}, state, {
                result: action.payload.result,
                entities: action.payload.entities
            });
        case GET_SELECTED_QUIZ:
            return Object.assign({}, state, {active: !state.active});
        case GOT_SELECTED_QUIZ:
            return Object.assign({}, state, {selected: action.payload});
        case SET_SELECTED:
            return Object.assign({}, state, {selected: action.payload});
        default:
            return state;
    }
};
//
export default combineReducers({
//     // current,
    loading: createLoadingWithNamedType(clientModel),
    data,
})