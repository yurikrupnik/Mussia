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

export const fountUser = (user) => {
    return dispatch => {
        dispatch(got(user));
    }
};

export const login = (body, dispatch, props) => {
    let {history} = props;
    return Login(body).then(function (da) {
        dispatch(got(da.data));
        history.push('/');
    });
};
