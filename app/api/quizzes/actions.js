import axios from 'axios';
import { received_error } from '../../redux/errors/actions';
import { url } from './config';
import { apiPrefix } from '../../config/env';

export const SET_SELECTED_QUIZ = 'SET_SELECTED_QUIZ';
export const GET_SELECTED_QUIZ = 'GET_SELECTED_QUIZ';
export const GET_QUIZZES = 'GET_QUIZZES';
export const GOT_QUIZZES = 'GOT_QUIZZES';

// To Be Added - write actions to expose to the client

const getQuizzes = (query = '')  => dispatch => {
    // console.log('params', params);
    // console.log('query', query);

    dispatch({ type: GET_QUIZZES });
    return axios({
            method: 'get',
            url: `${apiPrefix}${url}`,
        })
        .then(res => {
            dispatch({ type: GOT_QUIZZES, payload: res.data });
            return res.data;
        })
        .catch(received_error(dispatch));
};

const getQuizById = (id = '')  => dispatch => {
    console.log('id', id);
    debugger;
    dispatch({ type: SET_SELECTED_QUIZ, id});
    return axios({
        method: 'get',
        url: `${apiPrefix}${url}/${id}`,
    })
        .then(res => {
            dispatch({ type: GET_SELECTED_QUIZ, payload: res.data });
            return res.data;
        })
        .catch(received_error(dispatch));
};

export {
    getQuizzes,
    getQuizById
}