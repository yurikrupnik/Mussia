import {createActionsType} from './actions';
import {SUCCESS, READ, SCHEMA, PROMISE_TYPES_CHAIN} from '../../constants';

function createSchemaWithNamedType(name = '') {
    const actions = PROMISE_TYPES_CHAIN.reduce((acc, next) => {
        if (next === SUCCESS) {
            acc[`${READ}_${name}_${SCHEMA}_${next}`] = (state, action) => action.payload;
        } else {
            acc[`${READ}_${name}_${SCHEMA}_${next}`] = (state, action) => state;
        }
        return acc;
    }, {});

    return function(state = {}, action) {
        if (actions.hasOwnProperty(action.type)) {
            return actions[action.type](state, action);
        } else {
            return state;
        }
    }

}

export default createSchemaWithNamedType;