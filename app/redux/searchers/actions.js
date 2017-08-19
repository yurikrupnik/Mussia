// import Payments from '../../api/payments/request';

export const SERVICE_SEARCH = 'SERVICE_SEARCH';
export const DISPATCH_SEARCH_FULFILLED = 'DISPATCH_SEARCH_FULFILLED';


import request from 'superagent';

let returnBody = res => res.body;

import {received_error} from '../errors/actions';

import axios from 'axios';

const dispatchSearchPending = (dispatch, payload) => dispatch => {
    dispatch({
        type: SERVICE_SEARCH,
        payload: payload // tag
    });
};

const dispatchSearchFulfilled = dispatch => res => {
    dispatch({
        type: DISPATCH_SEARCH_FULFILLED,
        payload: res.data
    });
};



const search = (requestBody) => {
    return dispatch => {
        dispatchSearchPending(dispatch, requestBody);
        console.log('requestBody', requestBody);
        return axios({
            method: 'post',
            url:'/api/service/photos',
            data: requestBody,
        })
        .then(dispatchSearchFulfilled(dispatch))
        .catch(received_error(dispatch));
    };
};

const create = (body, dispatch) => {
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
            dispatch({
                type: CREATE_PAYMENTS_FULFILLED,
                payload: response.data
            });
        })
        .catch(received_error(dispatch));
};

const deleteById = id => {
    return dispatch => {
        dispatch({
            type: DELETE_PAYMENTS_PENDING,
            id
        });
        return axios({
            method: 'delete',
            url:'/api/payments/' + id
        })
        .then((res) => {
            dispatch({
                type: DELETE_PAYMENTS_FULFILLED,
                payload: res.data // deleted ids as array
            });
            return res;
        })
        .catch(received_error(dispatch));
    };
};

const deleteByIds = id => {
    return dispatch => {
        dispatch({
            type: DELETE_PAYMENTS_PENDING,
            id
        });
        return axios({
            method: 'delete',
            url:'/api/payments',
            data: id
        })
            .then((res) => {
                dispatch({
                    type: DELETE_PAYMENTS_FULFILLED,
                    payload: res.data // deleted ids as array
                });
                return res;
            })
            .catch(received_error(dispatch));
    };
};

const getSchema = () => {
    return dispatch => {
        dispatch({
            type: 'GET_SCHEMA'
        });
        return axios({
            method: 'get',
            url:'/api/payments/schema'
        })
            .then((res) => {
                dispatch({
                    type: 'GOT_SCHEMA',
                    payload: res.data // deleted ids as array
                });
                return res.data;
            })
            .catch(received_error(dispatch));
    };
};

const update = (body) => {
    return dispatch => {
        dispatch({
            type: UPDATE_PAYMENTS_PENDING,
            body
        });
        return axios({
            method: 'put',
            url: '/api/payments',
            data: body
        })
            .then((res) => {
                dispatch({
                    type: UPDATE_PAYMENTS_FULFILLED,
                    payload: res.data // deleted ids as array
                });
                return res;
            })
            .catch(received_error(dispatch));
    }
};

export {
    search,
    // create,
    // update,
    // deleteById,
    // deleteByIds,
    // getSchema
}