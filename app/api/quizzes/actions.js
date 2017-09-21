import axios from 'axios';
import { received_error } from '../../redux/errors/actions';
import { url } from './config';
import { apiPrefix } from '../../config/env';

export const GET_QUIZ = 'GET_QUIZ';
export const GOT_QUIZ = 'GOT_QUIZ';
export const GET_QUIZZES = 'GET_QUIZZES';
export const GOT_QUIZZES = 'GOT_QUIZZES';

// To Be Added - write actions to expose to the client

const getQuizzes = params => dispatch => {
    dispatch({ type: GET_QUIZZES });
    return axios({
            method: 'get',
            url: `${apiPrefix}${url}`,
            params
        })
        .then(res => {
            dispatch({ type: GOT_QUIZZES, payload: res.data })
        })
        .catch(received_error(dispatch));
};


export {
    getQuizzes
}