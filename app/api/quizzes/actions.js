import axios from 'axios';
import {received_error} from '../../redux/errors/actions';
import {url} from './config';
import {toggleIsFetching} from '../../redux/ui/isFetching/actions';
import {handleHostAndPrefix} from '../utils';

export const GOT_SELECTED_QUIZ = 'GOT_SELECTED_QUIZ';
export const GET_SELECTED_QUIZ = 'GET_SELECTED_QUIZ';
export const GET_QUIZZES = 'GET_QUIZZES';
export const GOT_QUIZZES = 'GOT_QUIZZES';
export const SET_SELECTED = 'SET_SELECTED';

const getQuizzes = (query = '') => dispatch => {
    dispatch({type: GET_QUIZZES});
    dispatch(toggleIsFetching('bar'));
    return axios({
        method: 'get',
        url: `${handleHostAndPrefix()}${url}`,
    })
        .then(res => {
            dispatch({type: GOT_QUIZZES, payload: res.data});
            dispatch(toggleIsFetching());
            return res.data;
        })
        .catch(received_error(dispatch));
};

const getQuizById = (id = '') => dispatch => {
    dispatch({type: GET_SELECTED_QUIZ, payload: id});
    return axios({
        method: 'get',
        url: `${handleHostAndPrefix()}${url}/${id}`
    })
        .then(res => dispatch({type: GOT_SELECTED_QUIZ, payload: res.data}))
        .catch(received_error(dispatch));
};

const setSelectedQuiz = (selected) => dispatch => dispatch({type: SET_SELECTED, payload: selected});

export {
    getQuizzes,
    getQuizById,
    setSelectedQuiz
}