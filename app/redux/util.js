import {bindActionCreators} from 'redux';
import {has, get} from 'lodash';
const REQUEST = 'REQUEST';
const RECEIVE = 'RECEIVE';
const ERROR = 'ERROR';
const SEND = 'SEND';
const DELETE = 'DELETE';

const handleRequest = state => Object.assign({}, state, {isFetching: true});
const handleReceive = (state, payload) => Object.assign({}, state, {data: payload, isFetching: false, isReceived: true});
const handleError = state => Object.assign({}, state, {error: {fuck: true}});
const handleSend = state => Object.assign({}, state, {error: {fuck: true}});
const handleDelete = state => Object.assign({}, state, {error: {fuck: true}});

const ACTIONS = [
    {actionName: REQUEST, handler: handleRequest},
    {actionName: RECEIVE, handler: handleReceive},

    {actionName: SEND, handler: handleSend},
    {actionName: DELETE, handler: handleDelete},
    {actionName: ERROR, handler: handleError},
];

const createActionsByUrl = url => {
    const URL = url.replace('/', '').toUpperCase();
    return ACTIONS.reduce((current, next) => {
        current[`${next.actionName}_${URL}`] = {
            actionName: `${next}_${URL}`,
            handler: next.handler // pass the handler as it is
        };
        return current;
    }, {});
    // return {
    //     [`REQUEST_${URL}`]: `REQUEST_${URL}`,
    //     [`RECEIVE_${URL}`]: `RECEIVE_${URL}`,
    //     [`ERROR_${URL}`]: `ERROR_${URL}`,
    //     [`SEND${URL}`]: `SEND_${URL}`,
    //     [`DELETE${URL}`]: `DELETE_${URL}`,
    //
    // };
};

const createReducerByUrl = (initialState, url) => {
    let actions = createActionsByUrl(url);
    return (state = initialState, action) => {
        let {type, payload} = action;
        if (actions.hasOwnProperty(type)) {
            const currentAction = actions[type];
            return currentAction.handler(state, payload);
        } else {
            return state;
        }
    }
};
const urlToUpper = str => str.replace('/', '').toUpperCase();

const dispatchActionByPrefixAndUrl = (url, prefix) => {
    const URL = urlToUpper(url);
    return {
        type: `${prefix}_${URL}`,
        payload: prefix
    };
};

const requestData = url => dispatchActionByPrefixAndUrl(url, REQUEST);

const sendData = url => dispatchActionByPrefixAndUrl(url, SEND);

const deleteData = url => dispatchActionByPrefixAndUrl(url, DELETE);

const receivedData = url => dispatch => {
    const URL = urlToUpper(url);
    // async
    return (res = []) => { // todo see if need this , check server side
        return dispatch({
            type: `${RECEIVE}_${URL}`,
            payload: res.body || res // this is run on server and client, make sure to make those actions for async data
        });
    };
};

const createDispatcher = actions => dispatch => ({actions: bindActionCreators(actions, dispatch)});
const getStateByModelPrefix = prefix => (state, ownProps) => {
    // get the wanted data from the state - example prefix for Payments Wrapper is 'payments'
    // todo get it from the class name it self
    const data = state[prefix];
    return {data};
};

const createRead = Resource => (query, params) => dispatch => {
    dispatch(requestData(Resource.url));
    // console.log('query', query);
    // console.log('params', params);
    return Resource.read(params, query)
        .then(dispatch(receivedData(Resource.url)))
        .catch(function (err) {
            console.log('err', err);
        });
    // .catch(dispatch(requestError));
};

const createPost = Resource => (query, params) => dispatch => {
    dispatch(sendData(Resource.url));
    // console.log('query', query);
    // console.log('params', params);
    return Resource.post(params, query)
        .then(dispatch(receivedData(Resource.url)))
        .catch(function (err) {
            console.log('err', err);
        });
    // .catch(dispatch(requestError));
};

const createDelete = Resource => (query, params) => dispatch => {
    // dispatch({
    //     type: 'DELETE'
    // });
    dispatch(deleteData(Resource.url));
    // console.log('query', query);
    // console.log('params', params);
    return Resource.delete(params, query)
        .then(dispatch(receivedData(Resource.url)))
        .catch(function (err) {
            console.log('err', err);
        });
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