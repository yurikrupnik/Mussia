
import {createActionsType} from './actions';
import {SUCCESS, READ, PROMISE_TYPES_CHAIN} from '../../constants';

const createReducerActionsByName = (name) => {
    return PROMISE_TYPES_CHAIN.reduce((acc, next) => {
        if (next === SUCCESS) {
            acc[`${READ}_${name}_${next}`] = (state, action) => Object.assign({}, state, {
                result: action.payload.map(val => val['_id']),
                entities: action.payload.reduce((acc, next)=> {
                    acc[next['_id']] = next;
                    return acc;
                }, {})
            });
        } else {
            acc[`${READ}_${name}_${next}`] = (state, action) => state;
        }
        return acc;
    }, {});
};

const createReadReducerByTagName = (name = '') => {
    const reducerActions = createReducerActionsByName(name);
    return (state = {}, action) => { // reducer
        if (reducerActions.hasOwnProperty(action.type)) {
            return reducerActions[action.type](state, action);
        } else {
            return state;
        }
    }
};

export default createReadReducerByTagName;