import {SUCCESS, CREATE, PROMISE_TYPES_CHAIN} from '../../constants';

const createCreateReducerHandlers = (name) => {
    return PROMISE_TYPES_CHAIN.reduce((acc, next) => {
        if (next === SUCCESS) {
            acc[`${CREATE}_${name}_${next}`] = (state, action) => {
                console.log('state', state);

                return Object.assign({}, state, {
                    result: state.result.concat(action.payload._id),
                    entities: {
                        ...state.entities,
                        [action.payload._id]: action.payload
                    }
                });
            }
        } else {
            acc[`${CREATE}_${name}_${next}`] = (state, action) => state;
        }
        return acc;
    }, {});
};

export default createCreateReducerHandlers;