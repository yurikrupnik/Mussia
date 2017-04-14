import Payments from '../../api/payments/request';

function createActions(url) {
    const URL = url.replace('/', '').toUpperCase();
    return {
        [`REQUEST_${URL}`]: `REQUEST_${URL}`,
        [`RECEIVE_${URL}`]: `RECEIVE_${URL}`,
        [`ERROR_${URL}`]: `ERROR_${URL}`,

    }
}

function urlToUpper(url) {
    return url.replace('/', '').toUpperCase();
}
const requestData = (url) => {
    const URL = urlToUpper(url);
    return {
        type: `REQUEST_${URL}`
    }
};

export const receivedData = (url) => (dispatch) => {
    const URL = urlToUpper(url);
    // async
    return (res = []) => {
        return dispatch({
            type: `RECEIVE_${URL}`,
            data: res.body || res // this is run on server and client, make sure to make those actions for async data
        });
    };
};
export let actions = createActions(Payments.url);

export const REQUEST_PAYMENTS = 'REQUEST_PAYMENTS';
export const RECEIVE_PAYMENTS = 'RECEIVE_PAYMENTS';
export const ERROR_PAYMENTS = 'ERROR_PAYMENTS';



/*
 * action creators
 */


export const fetch = () => {
    return dispatch => {
        dispatch(requestData(Payments.url));
        return Payments.get()
            .then(dispatch(receivedData(Payments.url)))
            .catch(function (err) {
                console.log('err', err);

            });
            // .catch(dispatch(requestError));
    }
};
