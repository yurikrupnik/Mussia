import User from '../../api/users/request';

export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';


/*
 * action creators
 */
const ask = () => {
    return {
        type: REQUEST_USER
    }
};

export const got = (response) => {
    return {
        type: RECEIVE_USER,
        user: response.body || response // this is run on server and client, make sure to make those actions for async data
    }
};

export const fetchPayments = () => {
    return dispatch => {
        dispatch(ask());
        return User.getPayments()
            .then(response => dispatch(got(response)))
    }
};