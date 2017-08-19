import axios from 'axios';
import { received_error } from '../errors/actions';

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
    console.log('requestBody', requestBody);

    dispatchPending(dispatch, requestBody);
    return axios({
            method: 'post',
            url: '/galleries',
            data: requestBody,
        })
        .then(dispatchFulfilled(dispatch))
        .catch(received_error(dispatch));
};


export {
    getGalleries,
    // searchByPage,
    // getSearches,
    // deleteById,
    // deleteByIds,
    // getSchema
}