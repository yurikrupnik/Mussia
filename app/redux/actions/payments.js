import Payments from '../../api/payments/request';

export const READ_PAYMENTS_PENDING = 'READ_PAYMENTS_PENDING';
export const READ_PAYMENTS_FULFILLED = 'READ_PAYMENTS_FULFILLED';
export const READ_PAYMENTS_REJECTED = 'READ_PAYMENTS_REJECTED';

export const CREATE_PAYMENTS_PENDING = 'CREATE_PAYMENTS_PENDING';
export const CREATE_PAYMENTS_FULFILLED = 'CREATE_PAYMENTS_FULFILLED';
export const CREATE_PAYMENTS_REJECTED = 'CREATE_PAYMENTS_REJECTED';

export const UPDATE_PAYMENTS_PENDING = 'UPDATE_PAYMENTS_PENDING';
export const UPDATE_PAYMENTS_FULFILLED = 'UPDATE_PAYMENTS_FULFILLED';
export const UPDATE_PAYMENTS_REJECTED = 'UPDATE_PAYMENTS_REJECTED';

export const DELETE_PAYMENTS_PENDING = 'DELETE_PAYMENTS_PENDING';
export const DELETE_PAYMENTS_FULFILLED = 'DELETE_PAYMENTS_FULFILLED';
export const DELETE_PAYMENTS_REJECTED = 'DELETE_PAYMENTS_REJECTED';



export const read = (body) => {
    return dispatch => {
        dispatch({
            type: READ_PAYMENTS_PENDING,
            body
        });
        return Payments.read(body)
            .then((res) => {
                dispatch({
                    type: READ_PAYMENTS_FULFILLED,
                    payload: res
                });
                return res;
            }).then(res => {
                console.log('res', res);

            }).catch(err => {
                console.log('err', err);
            });
    };
};

export const create = (body) => {
    return dispatch => {
        dispatch({
            type: CREATE_PAYMENTS_PENDING,
            body
        });
        return Payments.read(body)
            .then((res) => {
                console.log('res', res);

                dispatch({
                    type: CREATE_PAYMENTS_FULFILLED,
                    payload: res
                });
                return res;
            }).then(res => {
                // console.log('res', res);
                return res;

            }).catch(err => {
                console.log('err', err);
                dispatch({
                    type: CREATE_PAYMENTS_FULFILLED,
                    payload: err
                });
            });
    };
};


/*
 * action creators
 */
// const ask = () => {
//     return {
//         type: REQUEST_USER
//     }
// };
//
// export const got = (user) => {
//     return {
//         type: RECEIVED_USER,
//         user: user
//     }
// };
//
// export const logout = () => {
//     return dispatch => {
//         return Logout()
//             .then(() => {
//                 dispatch({
//                     type: LOGOUT
//                 });
//             });
//     };
// };
//
// export const login = (body) => {
//     console.log('body', body);
//     return dispatch => {
//         return Login(body).then(function (da) {
//             dispatch({
//                 type: 'LOGIN'
//             });
//         });
//         // .then(() => {
//         //     dispatch({
//         //         type: LOGOUT
//         //     });
//         // });
//     };
// };
//
// export const fountUser = (user) => {
//     return dispatch => {
//         dispatch(got(user));
//     }
// };