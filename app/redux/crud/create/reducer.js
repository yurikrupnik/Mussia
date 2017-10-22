
import {createActionsType} from './actions';
import {SUCCESS, CREATE, PROMISE_TYPES_CHAIN} from '../../constants';

const createReducerActionsByName = (name) => {
    return PROMISE_TYPES_CHAIN.reduce((acc, next) => {
        if (next === SUCCESS) {
            acc[`${CREATE}_${name}_${next}`] = (state, action) => Object.assign({}, state, {
                result: state.result.concat(action.payload._id),
                entities: {
                    ...state.entities,
                    [action.payload._id]: action.payload
                }
            });
        } else {
            acc[`${READ}_${name}_${next}`] = (state, action) => state;
        }
        return acc;
    }, {});
};

const createCreateReducerByTagName = (name = '') => {
    const reducerActions = createReducerActionsByName(name);
    return (state = {}, action) => { // reducer
        if (reducerActions.hasOwnProperty(action.type)) {
            return reducerActions[action.type](state, action);
        } else {
            return state;
        }
    }
};

export default createCreateReducerByTagName;