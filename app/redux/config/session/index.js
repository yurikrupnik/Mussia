const SET_SESSION = 'SET_SESSION';
const REMOVE_SESSION = 'REMOVE_SESSION';

const handler = (state, action) => action.payload.id;

const resetHandlerString = (state, action) => '';

const setActionToHandler = (accumulator, action) => {
    accumulator[action] = handler;
    return accumulator;
};

const actionsInitialState = {
    [SET_SESSION]: handler,
    [REMOVE_SESSION]: resetHandlerString
};

const createActions = (_actions = []) => _actions.reduce(setActionToHandler, actionsInitialState);

let map = new Map(
    [
        [SET_SESSION, handler],
        [REMOVE_SESSION, resetHandlerString]
    ]
);
// map.set(SET_SESSION, handler);
// map.set(REMOVE_SESSION, resetHandlerString);


const createIsFetchingReducer = (_actions = []) => {
    // const actions = createActions(_actions);
    return (state = '', action) => {
        if (map.has(action.type)) {
            return map.get(action.type)(state, action);
            // map[action.type](state, action)
        } else {
            return state
        }
    }
};
export default (state = '', action) => {
    if (map.has(action.type)) {
        console.log('action.type', action.type);

        return map.get(action.type)(state, action);
        // map[action.type](state, action)
    } else {
        return state
    }
};