import axios from 'axios';
import {received_error} from '../errors/actions';

export const SERVICE_SEARCH = 'SERVICE_SEARCH';
export const DISPATCH_SEARCH_FULFILLED = 'DISPATCH_SEARCH_FULFILLED';
export const DISPATCH_SEARCH_BY_PAGE_FULFILLED = 'DISPATCH_SEARCH_BY_PAGE_FULFILLED';
export const DISPATCH_CACHE_DATA = 'DISPATCH_CACHE_DATA';

const dispatchSearchPending = (dispatch, payload) => {
    dispatch({
        type: SERVICE_SEARCH,
        payload: payload // body of the request
    });
};

const dispatchSearchFulfilled = dispatch => res => {
    dispatch({
        type: DISPATCH_SEARCH_FULFILLED,
        payload: res.data
    });
};

const updateWithData = body => dispatch => {
    dispatch({
        type: DISPATCH_CACHE_DATA,
        payload: body
    })

};

const dispatchSearchByPageFulfilled = dispatch => res => (dispatch({ type: DISPATCH_SEARCH_BY_PAGE_FULFILLED, payload: res.data }));


const search = requestBody => dispatch => {
    dispatchSearchPending(dispatch, requestBody);
    return axios({
            method: 'post',
            url: '/api/service/photos',
            data: requestBody,
        })
        .then(dispatchSearchFulfilled(dispatch))
        .catch(received_error(dispatch));
};

const searchByPage = requestBody => dispatch => {
    dispatchSearchPending(dispatch, requestBody);
    return axios({
            method: 'post',
            url: `/api/service/photos/${requestBody.page}`,
            data: requestBody,
        })
        .then(dispatchSearchByPageFulfilled(dispatch))
        .catch(received_error(dispatch));
};

export {
    search,
    searchByPage,
    updateWithData
}