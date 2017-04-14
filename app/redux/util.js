import {bindActionCreators} from 'redux';

const REQUEST = 'REQUEST';
const RECEIVE = 'RECEIVE';
const ERROR = 'ERROR';


function createActions(url) {
    const URL = url.replace('/', '').toUpperCase();
    return {
        [`REQUEST_${URL}`]: `REQUEST_${URL}`,
        [`RECEIVE_${URL}`]: `RECEIVE_${URL}`,
        [`ERROR_${URL}`]: `ERROR_${URL}`,

    }
}

function handleRequest(state) {
    return Object.assign({}, state, {isFetching: true});
}

function handleReceive(state, data) {
    return Object.assign({}, state, {data, isFetching: false, isReceived: true});
}

function handleError(state) {
    return Object.assign({}, state, {error: {fuck: true}});
}

function createReducerByUrl(initialState, url) {
    let actions = createActions(url);
    return function (state = initialState, action) {
        let {type, data} = action;
        if (actions.hasOwnProperty(action.type)) {
            if (type.startsWith(REQUEST)) {
                return handleRequest(state);
            } else if (type.startsWith(RECEIVE)) {
                return handleReceive(state, data);
            } else if (type.startsWith(ERROR)) {
                return handleError(state);
            }
        } else {
            return state;
        }
    }
}

// handle fetch
function urlToUpper(url) {
    return url.replace('/', '').toUpperCase();
}

function requestData(url) {
    const URL = urlToUpper(url);
    return {
        type: `${REQUEST}_${URL}`
    }
}

const receivedData = url => dispatch => {
    const URL = urlToUpper(url);
    // async
    return (res = []) => { // todo see if need this , check server side
        return dispatch({
            type: `${RECEIVE}_${URL}`,
            data: res.body || res // this is run on server and client, make sure to make those actions for async data
        });
    };
};

const createFetch = Resource => params => dispatch => {
    dispatch(requestData(Resource.url));
    // console.log('params', params);
    return Resource.get(params)
        .then(dispatch(receivedData(Resource.url)))
        .catch(function (err) {
            console.log('err', err);
        });
    // .catch(dispatch(requestError));
};

function createDispatcher(actions) {
    return dispatch => {
        return {
            actions: bindActionCreators(actions, dispatch)
        };
    };
}

function getStateByModelPrefix(prefix) {
    return (state, ownProps) => {
        let data = state[prefix];
        return {data};
    }
}

export {
    createReducerByUrl,
    createDispatcher,
    getStateByModelPrefix,
    createFetch
}