import Payments from '../../api/payments/request';
// console.log('Payment', Payments.url);

export const REQUEST_PAYMENTS = 'REQUEST_PAYMENTS';
export const RECEIVE_PAYMENTS = 'RECEIVE_PAYMENTS';

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
    return function (response = []) {
        // console.log('response', response);
        return dispatch({
            type: RECEIVE_PAYMENTS,
            data: response.body || response // this is run on server and client, make sure to make those actions for async data
        });
    };
};

export const fetch = () => {
    return dispatch => {
        dispatch(requestData);
        return Payments.get()
            .then(dispatch(receivedData))
            .then(function (response) {
                console.log('response', response);
                return response;
            });
    }
};
