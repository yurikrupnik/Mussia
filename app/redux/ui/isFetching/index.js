const TOGGLE_BOOL = 'TOGGLE_BOOL';

const handler = (state, action) => !state;

const setActionToHandler = (accumulator, action) => {
    accumulator[action] = handler;
    return accumulator;
};

const actionsInitialState = {[TOGGLE_BOOL]: handler};

const createActions = (_actions) => _actions.reduce(setActionToHandler, actionsInitialState);

const createIsFetchingReducer = (_actions = []) => {
    const actions = createActions(_actions);
    return (state = false, action) => {
        if (actions.hasOwnProperty(action.type)) {
            return actions[action.type](state, action)
        } else {
            return state
        }
    }
};
export default createIsFetchingReducer;