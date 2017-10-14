import {received_error} from '../../redux/errors/actions';
import {checkStatus, parseJSON, handleHostAndPrefix} from '../utils';
import {url} from './config';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

const setCurrentUser = (user) => dispatch => {
    dispatch({type: SET_CURRENT_USER, payload: user})
};

const fetchUsers = params => dispatch => {
    dispatch({type: FETCH_USERS_PENDING, payload: params});
    return fetch(`${handleHostAndPrefix()}${url}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(res => {
            dispatch({
                type: FETCH_USERS_SUCCESS, payload: res
            });
            return res;
        })
        .catch(err => {
            console.log('err', err);

        });
};


export {
    setCurrentUser,
    fetchUsers
    // getQuizzes,
    // getQuizById,
    // setSelectedQuiz
}
