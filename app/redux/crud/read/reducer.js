import {SUCCESS, READ, PROMISE_TYPES_CHAIN} from '../../constants';

const createReadReducerHandlers = (name) => {
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

export default createReadReducerHandlers;