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

let handleError = err => {
    if (err.status === 403) {
        console.log('found 403 - do some shit if want', err);
    }
    if (err.status === 404) {
        console.log('found 404 - do some shit if want', err);
    }
    debugger
    // throw new Error(err);
    received_error(err);
    // return err;
};

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

const read = (requestPayload) => {
    return dispatch => {
        dispatch({
            type: READ_PAYMENTS_PENDING,
            payload: requestPayload
        });
        return axios({
            method:'get',
            url:'/api/payments',
            params: requestPayload
        })
            .then(function(response) {
                dispatch({
                    type: READ_PAYMENTS_FULFILLED,
                    payload: response.data
                });
                // return response.data;

                // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
            })
            .catch(received_error);
    };
};

const create = (body) => {
    return dispatch => {
        debugger
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
            .catch(err => {
                received_error(dispatch, err);
                // dispatch({
                //     type: READ_PAYMENTS_REJECTED,
                //     err
                // });
                // return err;

            });

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

const update = (body) => {
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

const deleteById = _id => {
    return dispatch => {
        console.log('_id', _id);
        dispatch({
            type: DELETE_PAYMENTS_PENDING
        });
        return axios({
            method: 'delete',
            url:'/api/payments',
            data: {_id}
        })
            .then((res) => {
                dispatch({
                    type: DELETE_PAYMENTS_FULFILLED,
                    payload: res
                });
                return res;
            })
            .catch(err => {
                console.log('err', err);
                dispatch({
                    type: CREATE_PAYMENTS_FULFILLED,
                    payload: err
                });
            });
    };
};


export {
    read,
    create,
    update,
    deleteById
}