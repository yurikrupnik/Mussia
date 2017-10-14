import axios from 'axios';
import {received_error} from '../../redux/errors/actions';
import {url} from './config';
import {apiPrefix} from '../../config/env';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
// export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';

const setCurrentUser = (user) => dispatch => {
    dispatch({ type: SET_CURRENT_USER, payload: user})
};

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error
    }
}

function parseJSON(response) {
    return response.json()
}

const fetchUsers = params => dispatch => {
    dispatch({ type: FETCH_USERS_PENDING, payload: params });


    return fetch(`${global.window ? '' : 'http://localhost:3000'}${apiPrefix}${url}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(res => {
            return dispatch({
                type: FETCH_USERS_SUCCESS, payload: res
            });
        })
        .catch(received_error(dispatch));
};


export {
    setCurrentUser,
    fetchUsers
    // getQuizzes,
    // getQuizById,
    // setSelectedQuiz
}
