
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
        if (actions.hasOwnProperty(type)) { // instead of switch- if false return state
            return actions[type](state, payload);
        } else {
            return state;
        }
    }
};



const dispatchActionByPrefixAndUrl = (resource, query, params, body, prefix) => {
    let URL = urlToUpper(resource.url);
    const method = prefix.toLowerCase();
    return {
        type: `${prefix}_${URL}`,
        payload: resource[method](query, params, body) // always pass query params and body to the requets
    };
};

const getData = (resource, query, params, body) => dispatchActionByPrefixAndUrl(resource, query, params, body, READ);
const sendData = (resource, query, params, body) => dispatchActionByPrefixAndUrl(resource, query, params, body, SEND);
const deleteData = (resource, query, params, body) => dispatchActionByPrefixAndUrl(resource, query, params, body, DELETE);

const getStateBySelector = selector => (state, ownProps) => {
    if (has(state, selector)) {
        return {[selector]: state[selector]};
    }
    return {};
};

// create shit
const createRead = Resource => (query, params, body) => dispatch => dispatch(getData(Resource, query, params, body));
const createPost = Resource => (query, params, body) => dispatch => dispatch(sendData(Resource, query, params, body));
const createDelete = Resource => (query, params, body) => dispatch => dispatch(deleteData(Resource, query, params, body));
// end of create shit


export {
    createReducerBySelector,
    getStateBySelector,
    createRead,
    createPost,
    createDelete
}