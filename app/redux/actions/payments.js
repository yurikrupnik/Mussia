import Payments from '../../api/payments/request';

export const REQUEST_PAYMENTS = 'REQUEST_PAYMENTS';
export const RECEIVE_PAYMENTS = 'RECEIVE_PAYMENTS';


/*
 * action creators
 */
const ask = () => {
    return {
        type: REQUEST_PAYMENTS
    }
};

export const got = (dispatch = []) => {
    // console.log('res', dispatch);

    return function (response = []) {
        // console.log('response', response);
        return dispatch({
            type: RECEIVE_PAYMENTS,
            items: response.body || response // this is run on server and client, make sure to make those actions for async data
        });
    };
};

export const fetchPayments = () => {
    return dispatch => {
        dispatch(ask);
        return Payments.getPayments()
            .then(dispatch(got))
            .then(function (response) {
                console.log('response', response);
                return response;
            });
    }
};
