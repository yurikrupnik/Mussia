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

    READ_QUIZZES_SCHEMA_SUCCESS,
    READ_QUIZZES_SCHEMA_PENDING,
    READ_QUIZZES_SCHEMA_FAIL
} from './actions';


const data = (state = {result: [], entities: {}, schema: {}}, action) => {
    switch (action.type) {
        case CREATE_QUIZZES_SUCCESS:
            return Object.assign({}, state, {
                result: state.result.concat(action.payload._id),
                entities: {
                    ...state.entities,
                    [action.payload._id]: action.payload
                }
            });
        case UPDATE_QUIZZES_SUCCESS:
            return Object.assign({}, state, {
                entities: {
                    ...state.entities,
                    [action.payload._id]: action.payload
                }
            });
        case READ_QUIZZES_SUCCESS:
            return Object.assign({}, state, {
                result: action.payload.map(val => val['_id']),
                entities: action.payload.reduce((acc, next)=> {
                    acc[next['_id']] = next;
                    return acc;
                }, {})
            });
        case READ_QUIZZES_SCHEMA_SUCCESS:
            return Object.assign({}, state, {schema: action.payload});
        case READ_QUIZZES_FAIL:
        case READ_QUIZZES_PENDING:
        case DELETE_QUIZZES_FAIL:
        case CREATE_QUIZZES_FAIL:
        case UPDATE_QUIZZES_FAIL:
        case READ_QUIZZES_SCHEMA_FAIL:
        case UPDATE_QUIZZES_PENDING:
        case CREATE_QUIZZES_PENDING:
        case DELETE_QUIZZES_PENDING:
        case DELETE_QUIZZES_SUCCESS:
        case READ_QUIZZES_SCHEMA_PENDING:
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