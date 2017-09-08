import axios from 'axios';
import { received_error } from '../errors/actions';

export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COMMENTS_FULFILLED = 'GET_COMMENTS_FULFILLED';

const dispatchPending = (dispatch, payload) => (
    dispatch({
        type: GET_COMMENTS,
        payload: payload // body of the request
    })
);

const dispatchFulfilled = dispatch => res => (
    dispatch({
        type: GET_COMMENTS_FULFILLED,
        payload: res.data
    })
);

const getComments = requestBody => dispatch => {
    dispatchPending(dispatch, requestBody);
    return axios({
            method: 'get',
            url: 'http://jsonplaceholder.typicode.com/comments'
        })
        .then(dispatchFulfilled(dispatch))
        .catch(received_error(dispatch));
};

export {
    getComments
}