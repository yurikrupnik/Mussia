import {logout as Logout, login as Login} from '../../api/auth/request';

export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVED_USER = 'RECEIVED_USER';
export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';


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
    };
};

export const login = (body) => {
    console.log('body', body);
    return dispatch => {
        return Login(body).then(function (da) {
            dispatch({
                type: 'LOGIN'
            });
        });
            // .then(() => {
            //     dispatch({
            //         type: LOGOUT
            //     });
            // });
    };
};

export const fountUser = (user) => {
    return dispatch => {
        dispatch(got(user));
    }
};