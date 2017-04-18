import {bindActionCreators} from 'redux';
import _ , {has, get, forEeach} from 'lodash';
const READ = 'READ';
const DELETE = 'DELETE';
const SEND = 'SEND';

const ERROR = 'ERROR';

const handleReadPending = (state, payload) => Object.assign({}, state, {active: true});
const handleReadFulfilled = (state, payload) => Object.assign({}, state, {active: false, data: payload});
const handleError = (state, payload) => Object.assign({}, state, {error: {fuck: true}});
// const handleSend = (state, payload) => Object.assign({}, state, {error: {fuck: true}});
const handleDeletePending = (state, payload) => {
    console.log('payload', payload);
    // let {id} = payload;
    return Object.assign({}, state, {data: []});
};

const handleDeleteFulfilled = (state, payload) => {
    console.log('payload', payload);

    // let {id} = payload;

    return Object.assign({}, state, {data: []});
};

const urlToUpper = str => str.replace('/', '').toUpperCase();

// actions map
const ACTIONS = [
    {
        actionName: READ,
        handlers: {
            PENDING: handleReadPending,
            FULFILLED: handleReadFulfilled,
            ERROR: handleError,
        }
    },
    {
        actionName: DELETE,
        handlers: {
            PENDING: handleDeletePending,
            FULFILLED: handleDeleteFulfilled,
            ERROR: handleError,
        }
    }
    // {actionName: SEND, handler: handleSend},
    // {actionName: DELETE, handler: handleDelete},
    // {actionName: ERROR, handler: handleError},
];


// reducer shit
const createActionsByUrl = url => {
    const URL = urlToUpper(url);
    return ACTIONS.reduce((current, next) => { // current will be actual reducer
        let {handlers, actionName} = next;
        _.forEach(handlers, (handler, key) => {
            current[`${actionName}_${URL}_${key}`] = handler;
        });
        return current;
    }, {});
};

const createReducerByUrl = (initialState, url) => {
    let actions = createActionsByUrl(url);
    return (state = initialState, action) => {
        let {type, payload} = action;
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
const createDispatcher = actions => dispatch => ({actions: bindActionCreators(actions, dispatch)});
const getStateByModelPrefix = prefix => (state, ownProps) => {
    // get the wanted data from the state - example prefix for Payments Wrapper is 'payments'
    // todo get it from the class name it self
    const data = state[prefix];
    return {data};
};

const createRead = Resource => (query, params) => dispatch => {
    dispatch(getData(Resource, query, params));
};

const createPost = Resource => (query, params) => dispatch => dispatch(sendData(Resource, query, params));


const createDelete = Resource => (query, params) => dispatch => dispatch(deleteData(Resource, query, params));

export {
    createReducerByUrl,
    createDispatcher,
    getStateByModelPrefix,
    createRead,
    createPost,
    createDelete
}