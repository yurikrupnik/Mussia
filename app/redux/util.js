import {bindActionCreators} from 'redux';
import _ , {has, get, forEeach} from 'lodash';
const READ = 'READ';
const ERROR = 'ERROR';
const SEND = 'SEND';
const DELETE = 'DELETE';

const handlePending = state => Object.assign({}, state, {isFetching: true});
const handleFulfilled = (state, payload) => Object.assign({}, state, {data: payload, isFetching: false, isReceived: true});
const handleError = state => Object.assign({}, state, {error: {fuck: true}});
const handleSend = state => Object.assign({}, state, {error: {fuck: true}});
const handleDelete = state => Object.assign({}, state, {error: {fuck: true}});

const urlToUpper = str => str.replace('/', '').toUpperCase();

// actions map
const ACTIONS = [
    {
        actionName: READ,
        handlers: {
            PENDING: handlePending,
            FULFILLED: handleFulfilled,
            ERROR: handleError,
        }
    },
    // {actionName: SEND, handler: handleSend},
    // {actionName: DELETE, handler: handleDelete},
    // {actionName: ERROR, handler: handleError},
];


// reducer shit
const createActionsByUrl = url => {
    const URL = urlToUpper(url);
    return ACTIONS.reduce((current, next) => {
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
// todo make middleware to control async actions like promise middle ware
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
// const receivedData = url => dispatch => {
//     const URL = urlToUpper(url);
//     // async
//     return (res = []) => { // todo see if need this , check server side
//         return dispatch({
//             type: `${RECEIVE}_${URL}`,
//             payload: res.body || res // this is run on server and client, make sure to make those actions for async data
//         });
//     };
// };
// end todo


const createDispatcher = actions => dispatch => ({actions: bindActionCreators(actions, dispatch)});
const getStateByModelPrefix = prefix => (state, ownProps) => {
    // get the wanted data from the state - example prefix for Payments Wrapper is 'payments'
    // todo get it from the class name it self
    const data = state[prefix];
    return {data};
};

const createRead = Resource => (query, params) => dispatch => {
    dispatch(getData(Resource, query, params));
    // console.log('query', query);
    // console.log('params', params);
    // return Resource.read(params, query)
    //     .then(dispatch(receivedData(Resource.url)))
    //     .catch(function (err) {
    //         console.log('err', err);
    //     });
    // .catch(dispatch(requestError));
};

const createPost = Resource => (query, params) => dispatch => {
    dispatch(sendData(Resource.url, query, params));
    // console.log('query', query);
    // console.log('params', params);
    // return Resource.post(params, query)
    //     .then(dispatch(receivedData(Resource.url)))
    //     .catch(function (err) {
    //         console.log('err', err);
    //     });
    // .catch(dispatch(requestError));
};

const createDelete = Resource => (query, params) => dispatch => {
    dispatch(deleteData(Resource, query, params));
    // dispatch(deleteData(Resource.url));
    // console.log('query', query);
    // console.log('params', params);
    // return Resource.delete(params, query)
    //     .then(dispatch(receivedData(Resource.url)))
    //     .catch(function (err) {
    //         console.log('err', err);
    //     });
    // .catch(dispatch(requestError));
};

export {
    createReducerByUrl,
    createDispatcher,
    getStateByModelPrefix,
    createRead,
    createPost,
    createDelete
}