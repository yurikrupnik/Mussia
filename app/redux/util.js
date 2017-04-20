
import _ , {has, get, forEeach, includes} from 'lodash';
const READ = 'READ';
const DELETE = 'DELETE';
const SEND = 'SEND';
const ERROR = 'ERROR';


// app reducers
const reduceReadPending = (state, payload) => Object.assign({}, state, {active: true});
const reduceReadFulfilled = (state, payload) => Object.assign({}, state, {active: false, data: payload});
const reduceError = (state, payload) => Object.assign({}, state, {error: {fuck: true}});
const reduceDeletePending = (state, payload) => Object.assign({}, state, {active: true});
const reduceDeleteFulfilled = (state, payload) => {
    const data = state.data.filter(val => !includes(payload, val._id));
    return Object.assign({}, state, {active: false, data});
};
// end app reducers

const urlToUpper = str => str.replace('/', '').toUpperCase();

// actions map

// const actions =


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
    }
];


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
        debugger;
        if (actions.hasOwnProperty(type)) { // instead of switch- if false return state
            return actions[type](state, payload);
        } else {
            return state;
        }
    }
};

const dispatchActionByPrefixAndUrl = (model, query, params, prefix) => {
    const URL = urlToUpper(model.url);
    const method = prefix.toLowerCase();
    return {
        type: `${prefix}_${URL}`,
        payload: model[method](query, params)
    };
};

const getData = (model, query, params) => dispatchActionByPrefixAndUrl(model, query, params, READ);
const sendData = (model, query, params) => dispatchActionByPrefixAndUrl(model, query, params, SEND);
const deleteData = (model, query, params) => dispatchActionByPrefixAndUrl(model, query, params, DELETE);

const getStateBySelector = selector => (state, ownProps) => {
    if (has(state, selector)) {
        return {[selector]: state[selector]};
    }
    return {};
};

// create shit
const createRead = Resource => (query, params) => dispatch => dispatch(getData(Resource, query, params));
const createPost = Resource => (query, params) => dispatch => dispatch(sendData(Resource, query, params));
const createDelete = Resource => (query, params) => dispatch => dispatch(deleteData(Resource, query, params));
// end of create shit


export {
    createReducerBySelector,
    getStateBySelector,
    createRead,
    createPost,
    createDelete
}