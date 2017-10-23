import createDeleteReducerHandlers from './delete/reducer';
import createReadReducerHandlers from './read/reducer';
import createCreateReducerHandlers from './create/reducer';
import createUpdateReducerHandlers from './update/reducer';

const createDataReducer = (name = '') => {
    const deleteActions = createDeleteReducerHandlers(name);
    const readActions = createReadReducerHandlers(name);
    const createActions = createCreateReducerHandlers(name);
    const updateActions = createUpdateReducerHandlers(name);
    return (state = {result: [], entities: {}}, action) => { // reducer
        if (deleteActions.hasOwnProperty(action.type)) {
            return deleteActions[action.type](state, action);
        } else if (readActions.hasOwnProperty(action.type)) {
            return readActions[action.type](state, action);
        } else if (createActions.hasOwnProperty(action.type)) {
            return createActions[action.type](state, action);
        } else if (updateActions.hasOwnProperty(action.type)) {
            return updateActions[action.type](state, action)
        } else {
            return state;
        }
    }
};

export default createDataReducer;