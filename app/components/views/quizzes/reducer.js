import {combineReducers} from 'redux';
import createLoadingWithNamedType from '../../../redux/crud/loader/reducer';
import createSchemaReducerByTagName from '../../../redux/crud/schema/reducer';
import {clientModel} from '../../../api/quizzes/config';
import data from '../../../redux/crud/reducer';


// function createSelectedReducer(name) {
//     return (state, ownProps) => {
//
//     }
// }
import {SUCCESS, READ, SCHEMA, PROMISE_TYPES_CHAIN} from '../../../constants';



const ADD = 'ADD';
const REMOVE = 'REMOVE';
const SELECTED = 'SELECTED';
const createSelectedReducer = (name) => {
    return {
        [`${name}_${ADD}_${SELECTED}`] : (state, action) => {
            console.log('action.payload', action.payload);
            return action.payload;
        },
        [`${name}_${REMOVE}_${SELECTED}`] : (state, action) => action.payload,
    }
};

const selectedReducer = (name = '') => {
    const reducerActions = createSelectedReducer(name);
    return (state = {}, action) => { // reducer
        if (reducerActions.hasOwnProperty(action.type)) {
            return reducerActions[action.type](state, action);
        } else {
            return state;
        }
    }
};

export default combineReducers({
    // current,
    selected: selectedReducer(clientModel),
    schema: createSchemaReducerByTagName(clientModel),
    loading: createLoadingWithNamedType(clientModel),
    data: data(clientModel),
    // selected = [id]
    // editing ? {id, odlVal, newVal}
});