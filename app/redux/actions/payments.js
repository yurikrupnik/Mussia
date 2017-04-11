import Payments from '../../api/payments/request';
// console.log('Payment', Payments.url);

export const REQUEST_PAYMENTS = 'REQUEST_PAYMENTS';
export const RECEIVE_PAYMENTS = 'RECEIVE_PAYMENTS';
import {requestSent, requestReceived, requestError} from '../../redux/actions/loading';
import {isFunction} from 'lodash';

/*
 * action creators
 */
const requestData = () => {
    return {
        type: REQUEST_PAYMENTS
    }
};

export const receivedData = (dispatch) => {
    // async
    return (res = []) => {
        return dispatch({
            type: RECEIVE_PAYMENTS,
            data: res.body || res // this is run on server and client, make sure to make those actions for async data
        });
    };
};

export const fetch = () => {
    return dispatch => {
        dispatch(requestData());
        dispatch(requestSent());
        return Payments.get()
            .then(dispatch(receivedData))
            .then(dispatch(requestReceived))
            .then(function (response) {
                console.log('response', response);
                return response;
            })
            .catch(dispatch(requestError));
    }
};
