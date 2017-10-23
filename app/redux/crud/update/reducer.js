import {SUCCESS, UPDATE, PROMISE_TYPES_CHAIN} from '../../../constants';

const createUpdateReducerHandlers = (name) => {
    return PROMISE_TYPES_CHAIN.reduce((acc, next) => {
        if (next === SUCCESS) {
            acc[`${UPDATE}_${name}_${next}`] = (state, action) => Object.assign({}, state, {
                entities: {
                    ...state.entities,
                    [action.payload._id]: action.payload
                }
            });
        } else {
            acc[`${UPDATE}_${name}_${next}`] = (state, action) => state;
        }
        return acc;
    }, {});
};

export default createUpdateReducerHandlers;