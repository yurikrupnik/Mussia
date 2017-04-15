import {bindActionCreators} from 'redux';

const REQUEST = 'REQUEST';
const RECEIVE = 'RECEIVE';
const ERROR = 'ERROR';

const createActions = url => {
    const URL = url.replace('/', '').toUpperCase();
    return {
        [`REQUEST_${URL}`]: `REQUEST_${URL}`,
        [`RECEIVE_${URL}`]: `RECEIVE_${URL}`,
        [`ERROR_${URL}`]: `ERROR_${URL}`,

    };
};
const handleRequest = state => Object.assign({}, state, {isFetching: true});
const handleReceive = (state, data) => Object.assign({}, state, {data, isFetching: false, isReceived: true});
const handleError = state => Object.assign({}, state, {error: {fuck: true}});
const createReducerByUrl = (initialState, url) => {
    let actions = createActions(url);
    return (state = initialState, action) => {
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
};
const urlToUpper = str => str.replace('/', '').toUpperCase();
const requestData = url => {
    const URL = urlToUpper(url);
    return {
        type: `${REQUEST}_${URL}`
    };
};
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
const createRead = Resource => params => dispatch => {
    dispatch(requestData(Resource.url));
    console.log('params', params);
    return Resource.read(params)
        .then(dispatch(receivedData(Resource.url)))
        .catch(function (err) {
            console.log('err', err);
        });
    // .catch(dispatch(requestError));
};
const createDispatcher = actions => dispatch => ({actions: bindActionCreators(actions, dispatch)});
const getStateByModelPrefix = prefix => (state, ownProps) => {
    const data = state[prefix];
    return {data};
};

export {
    createReducerByUrl,
    createDispatcher,
    getStateByModelPrefix,
    createRead
}