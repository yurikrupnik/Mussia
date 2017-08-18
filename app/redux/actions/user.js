import {logout as Logout, login as Login} from '../../api/auth/request';

// export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVED_USER = 'RECEIVED_USER';
export const LOGOUT = 'LOGOUT';
// export const LOGIN = 'LOGIN';


/*
 * action creators
 */

export const got = user => ({ type: RECEIVED_USER, user });

export const logout = () => dispatch => Logout().then(() => dispatch({ type: LOGOUT }));

export const fountUser = user => dispatch => dispatch(got(user));

