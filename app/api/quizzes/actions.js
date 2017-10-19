import axios from 'axios';
import {url, clientModel} from './config';
import {handleHostAndPrefix} from '../utils';
import {errorReceived} from '../../redux/errors/actions';
import createLoading from '../../redux/api/Loader/actions';

const loading = createLoading(clientModel);

export const GOT_SELECTED_QUIZ = 'GOT_SELECTED_QUIZ';
export const GET_SELECTED_QUIZ = 'GET_SELECTED_QUIZ';
export const GET_QUIZZES = 'GET_QUIZZES';
export const GOT_QUIZZES = 'GOT_QUIZZES';
export const SET_SELECTED = 'SET_SELECTED';

const getQuizzes = (query = '') => dispatch => {
    dispatch({type: GET_QUIZZES});
    dispatch(loading.toggle());
    return axios({
        method: 'get',
        url: `${handleHostAndPrefix()}${url}`,
    })
        .then(res => {
            dispatch({type: GOT_QUIZZES, payload: res.data});
            dispatch(loading.toggle());
            return res.data;
        })
        .catch(error => {
            // dispatch({type: FETCH_USERS_FAIL, error});
            dispatch(loading.toggle());
            dispatch(errorReceived(error));
            return error;
        });
};

const getQuizById = (id = '') => dispatch => {
    dispatch({type: GET_SELECTED_QUIZ, payload: id});
    return axios({
        method: 'get',
        url: `${handleHostAndPrefix()}${url}/${id}`
    })
        .then(res => dispatch({type: GOT_SELECTED_QUIZ, payload: res.data}))
        .catch(error => {
            // dispatch({type: FETCH_USERS_FAIL, error});
            dispatch(loading.toggle());
            dispatch(errorReceived(error));
            return error;
        });
};

const setSelectedQuiz = (selected) => dispatch => dispatch({type: SET_SELECTED, payload: selected});

export {
    getQuizzes,
    getQuizById,
    setSelectedQuiz
}