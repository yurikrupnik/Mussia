import {logout as Logout, singin} from '../../api/users/request';

export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVED_USER = 'RECEIVED_USER';
export const LOGOUT = 'LOGOUT';


/*
 * action creators
 */
const ask = () => {
    return {
        type: REQUEST_USER
    }
};

export const got = (user) => {
    return {
        type: RECEIVED_USER,
        user: user
    }
};

export const logout = () => {
    return dispatch => {
        return Logout()
            .then(() => {
                dispatch({
                    type: LOGOUT
                });
            });
            // .catch((err) => {
            //     console.log('err', err);
            //
            // });

    }
};

export const fountUser = (user) => {
    return dispatch => {
        dispatch(got(user));
    }
};