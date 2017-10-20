import {combineReducers} from 'redux';
// import current from '../../redux/ui/current/reducer';
import createLoadingWithNamedType from '../../redux/api/Loader/reducer';
import {clientModel} from './config';
import _, {filter, merge, has} from 'lodash';
import {
    READ_QUIZZES_PENDING,
    READ_QUIZZES_SUCCESS,
    READ_QUIZZES_FAIL,
    DELETE_QUIZZES_PENDING,
    DELETE_QUIZZES_SUCCESS,
    DELETE_QUIZZES_FAIL,

    UPDATE_QUIZZES_PENDING,
    UPDATE_QUIZZES_SUCCESS,
    UPDATE_QUIZZES_FAIL,

    CREATE_QUIZZES_PENDING,
    CREATE_QUIZZES_SUCCESS,
    CREATE_QUIZZES_FAIL,


    GET_SELECTED_QUIZ,
    GOT_SELECTED_QUIZ,
    SET_SELECTED
} from './actions';

// export const READ_QUIZZES_PENDING = `${READ}_${clientModel}_${PENDING}`;
// export const READ_QUIZZES_SUCCESS = `${READ}_${clientModel}_${SUCCESS}`;
// export const READ_QUIZZES_FAIL = `${READ}_${clientModel}_${FAIL}`;

const data = (state = {result: [], entities: {}, params: {}}, action) => {
    console.log('action.payload', action.payload);
    switch (action.type) {
        case READ_QUIZZES_PENDING:
            return Object.assign({}, state, {params: action.params});
        case READ_QUIZZES_SUCCESS:
            return Object.assign({}, state, {
                result: action.payload.result,
                entities: action.payload.entities
            });
        case READ_QUIZZES_FAIL:
        case DELETE_QUIZZES_FAIL:
        case CREATE_QUIZZES_FAIL:
        case UPDATE_QUIZZES_FAIL:
        case DELETE_QUIZZES_PENDING:
        case DELETE_QUIZZES_SUCCESS:
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