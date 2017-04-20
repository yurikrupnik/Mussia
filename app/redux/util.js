
import _ , {has, get, forEeach, includes} from 'lodash';
const CREATE = 'CREATE';
const READ = 'READ';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';
// const ERROR = 'ERROR';


// app reducers
const reduceReadPending = (state, payload) => Object.assign({}, state, {active: true});
const reduceReadFulfilled = (state, payload) => Object.assign({}, state, {active: false, data: payload});
const reduceError = (state, payload) => Object.assign({}, state, {error: {fuck: true}});
const reduceDeletePending = (state, payload) => Object.assign({}, state, {active: true});
const reduceDeleteFulfilled = (state, payload) => {
    const data = state.data.filter(val => !includes(payload, val._id));
    return Object.assign({}, state, {active: false, data});
};

const reduceCreatePending = (state, payload) => Object.assign({}, state, {active: true});
const reduceCreateFulfilled = (state, payload) => Object.assign({}, state, {active: false, data: [...state.data, payload]});

const reduceUpdatePending = (state, payload) => Object.assign({}, state, {active: true});
const reduceUpdateFulfilled = (state, payload) => Object.assign({}, state, {active: false});
// end app reducers



const ACTIONS = [
    {
        actionName: READ,
        handlers: {
            PENDING: reduceReadPending,
            FULFILLED: reduceReadFulfilled,
            ERROR: reduceError,
        }
    },
    {
        actionName: DELETE,
        handlers: {
            PENDING: reduceDeletePending,
            FULFILLED: reduceDeleteFulfilled,
            ERROR: reduceError,
        }
    },
    {
        actionName: CREATE,
        handlers: {
            PENDING: reduceCreatePending,
            FULFILLED: reduceCreateFulfilled,
            ERROR: reduceError,
        }
    },
    {
        actionName: UPDATE,
        handlers: {
            PENDING: reduceUpdatePending,
            FULFILLED: reduceUpdateFulfilled,
            ERROR: reduceError,
        }
    }
];

// selector
const getStateBySelector = selector => (state, ownProps) => {
    if (has(state, selector)) {
        return {[selector]: state[selector]};
    }
    return {};
};

// reducer shit
const createActionsBySelector = selector => {
    const sel = selector.toUpperCase();
    return _.reduce(ACTIONS, (current, next) => { // current will be actual reducer
        let {handlers, actionName} = next;
        _.forEach(handlers, (handler, key) => {
            current[`${actionName}_${sel}_${key}`] = handler;
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