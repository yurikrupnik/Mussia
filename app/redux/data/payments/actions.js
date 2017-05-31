// import Payments from '../../api/payments/request';

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


import request from 'superagent';
let returnBody = res => res.body;

import {received_error} from '../../actions/errors';

import axios from 'axios';

class Request {

}

function postPayment(body) {
    // GET request for remote image
    axios({
        method:'post',
        url:'/api/payments',
        // url:'http://bit.ly/2mTM3nY',
        // responseType:'stream'
    }, body)
        .then(function(response) {
            console.log('response', response);

            // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        })
        .catch(err => {
            received_error(err);
        });
}
// postPayment()

const dispatchPending = (dispatch, payload) => dispatch => {
    dispatch({
        type: READ_PAYMENTS_PENDING,
        payload: payload
    });
};

const dispatchFulfilled = dispatch => res => {
    dispatch({
        type: READ_PAYMENTS_FULFILLED,
        payload: res.data
    });
};



const read = (requestPayload) => {
    return dispatch => {
        dispatchPending(dispatch, requestPayload);
        return axios({
            method:'get',
            url:'/api/payments',
            params: requestPayload
        })
        .then(dispatchFulfilled(dispatch))
        .catch(received_error(dispatch));
    };
};

const create = (body) => {
    return dispatch => {
        dispatch({
            type: CREATE_PAYMENTS_PENDING,
            body
        });
        return axios({
            method:'post',
            url:'/api/payments',
            data: body,
        })
            .then(function(response) {
                // throw new Error('propblem');
                dispatch({
                    type: CREATE_PAYMENTS_FULFILLED,
                    payload: response.data
                });
            })
            .catch(received_error(dispatch));

        // .then(returnBody)
        // .catch(handleError);
        // dispatch({
        //     type: CREATE_PAYMENTS_PENDING,
        //     body
        // });

        // return Payments.create({}, {}, body)
        //     .then((res) => {
        //         // console.log('res', res);
        //
        //         return dispatch({
        //             type: CREATE_PAYMENTS_FULFILLED,
        //             payload: res
        //         });
        //         // return res;
        //     })
        //     .catch(err => {
        //         // console.log('err', err);
        //         return dispatch({
        //             type: CREATE_PAYMENTS_REJECTED,
        //             payload: err
        //         });
        //     });
    };
};

// const update = (body) => {
//     return dispatch => {
//         dispatch({
//             type: CREATE_PAYMENTS_PENDING,
//             body
//         });
//         return Payments.read(body)
//             .then((res) => {
//                 console.log('res', res);
//
//                 dispatch({
//                     type: CREATE_PAYMENTS_FULFILLED,
//                     payload: res
//                 });
//                 return res;
//             }).then(res => {
//                 // console.log('res', res);
//                 return res;
//
//             }).catch(err => {
//                 console.log('err', err);
//                 dispatch({
//                     type: CREATE_PAYMENTS_FULFILLED,
//                     payload: err
//                 });
//             });
//     };
// };

const deleteById = id => {
    return dispatch => {
        dispatch({
            type: DELETE_PAYMENTS_PENDING,
            id
        });
        return axios({
            method: 'delete',
            url:'/api/payments/' + id,
        })
            .then((res) => {
            debugger;
                dispatch({
                    type: DELETE_PAYMENTS_FULFILLED,
                    payload: res.data // deleted ids as array
                });
                return res;
            })
            .catch(received_error(dispatch));
    };
};


export {
    read,
    create,
    // update,
    deleteById
}