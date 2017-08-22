import axios from 'axios';
import { received_error } from '../../redux/errors/actions';
import { url } from './config';
import { apiPrefix } from '../../config/env';

export const GET_GALLERIES = 'GET_GALLERIES';
export const GET_GALLERIES_FULFILLED = 'GET_GALLERIES_FULFILLED';


const dispatchPending = (dispatch, payload) => {
    dispatch({
        type: GET_GALLERIES,
        payload: payload // body of the request
    });
};

const dispatchFulfilled = dispatch => res => {
    dispatch({
        type: GET_GALLERIES_FULFILLED,
        payload: res.data
    });
};

const getGalleries = requestBody => dispatch => {
    dispatchPending(dispatch, requestBody);
    return axios({
        method: 'post', // todo change to get
        url: `${apiPrefix}${url}`,
        data: requestBody,
    })
        .then(dispatchFulfilled(dispatch))
        .catch(received_error(dispatch));
};

const removeGalleries = requestBody => dispatch => {
    return axios({
        method: 'delete',
        url: `${apiPrefix}${url}`,
        data: requestBody,
    });
};

export {
    getGalleries,
    removeGalleries
}