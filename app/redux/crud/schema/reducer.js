import {SUCCESS, READ, SCHEMA, PROMISE_TYPES_CHAIN} from '../../../constants';

const createReducerActionsByName = (name) => {
    return PROMISE_TYPES_CHAIN.reduce((acc, next) => {
        if (next === SUCCESS) {
            acc[`${READ}_${name}_${SCHEMA}_${next}`] = (state, action) => action.payload;
        } else {
            acc[`${READ}_${name}_${SCHEMA}_${next}`] = (state, action) => state;
        }
        return acc;
    }, {});
};

const createSchemaReducerByTagName = (name = '') => {
    const reducerActions = createReducerActionsByName(name);
    return (state = {}, action) => { // reducer
        if (reducerActions.hasOwnProperty(action.type)) {
            return reducerActions[action.type](state, action);
        } else {
            return state;
        }
    }
};

export default createSchemaReducerByTagName;