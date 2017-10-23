import {SUCCESS, DELETE, PROMISE_TYPES_CHAIN} from '../../../constants';

const createDeleteReducerHandlers = (name) => {
    return PROMISE_TYPES_CHAIN.reduce((acc, next) => {
        if (next === SUCCESS) {
            acc[`${DELETE}_${name}_${next}`] = (state, action) => state;
        } else {
            acc[`${DELETE}_${name}_${next}`] = (state, action) => state;
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

export default createDeleteReducerHandlers;