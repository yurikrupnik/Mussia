import {singout, singin} from '../../api/users/request';

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
    // debugger
    return dispatch => {
    //     console.log('dispatch', dispatch);
        return singout().then(function (a) {
            console.log('a', a);

            dispatch({
                type: LOGOUT
            });
        })

    }
};

export const fountUser = (user) => {
    return dispatch => {
        dispatch(got(user));
    }
};