import {bindActionCreators} from 'redux';

import _ , {has, get, forEeach, includes} from 'lodash';
// import Actions from './actions';
import {ACTIONS} from './config';
// create dispatcher by actions amd bind to props as map to dispatcher
export const createDispatcherByActions = actions => dispatch => ({actions: bindActionCreators(actions, dispatch)});

// export const setActionsOnDispatch = resource =>
// selector
const getStateBySelector = selector => (state, ownProps) => {
    if (has(state, selector)) {
        return {[selector]: state[selector]};
    }
    return {};
};

// reducer shit
const createActionsBySelector = selector => {
    const _selector = selector.toUpperCase();
    return _.reduce(ACTIONS, (current, next) => { // current will be actual reducer
        let {handlers, actionName} = next;
        _.forEach(handlers, (handler, key) => {
            const action = `${actionName}_${_selector}_${key}`;
            current[action] = handler;
        });
        return current;
    }, {});
};

const createReducerBySelector = (initialState, selector) => {
    let actions = createActionsBySelector(selector);
    return (state = initialState, action) => {
        let {type, payload} = action;
        if (actions.hasOwnProperty(type)) { // instead of switch- if false return state
            return actions[type](state, payload);
        } else {
            return state;
        }
    }
};

export {
    createReducerBySelector,
    getStateBySelector,
}