const SET_SESSION = 'SET_SESSION';
const RESET_SESSION = 'RESET_SESSION';

const setHandler = (state, action) => action.payload.id;

const resetHandler = (state, action) => '';

const setActionToHandler = (accumulator, action) => {
    accumulator[action] = setHandler;
    return accumulator;
};

const actionsInitialState = {
    [SET_SESSION]: setHandler,
    [RESET_SESSION]: resetHandler
};

const createActions = (actions = []) => actions.reduce(setActionToHandler, actionsInitialState);

const createSessionReducer = (actionsArr = []) => {
    const actions = createActions(actionsArr);
    return (state = '', action) => {
        if (actions.hasOwnProperty(action.type)) {

            return actions[action.type](state, action)
        } else {
            return state
        }
    }
};

export default createSessionReducer;
