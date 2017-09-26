import axios from 'axios';
import { received_error } from '../../redux/errors/actions';
import { url } from './config';
import { apiPrefix } from '../../config/env';

export const GET_RESULTS = 'GET_RESULTS';
export const GOT_RESULTS = 'GOT_RESULTS';
// export const GET_QUIZZES = 'GET_QUIZZES';
// export const GOT_QUIZZES = 'GOT_QUIZZES';

// To Be Added - write actions to expose to the client

const getResults = params => dispatch => {
    dispatch({ type: GET_RESULTS });
    return axios({
            method: 'get',
            url: `${apiPrefix}${url}`
        })
        .then(res => dispatch({ type: GOT_RESULTS, payload: res.data }))
        .catch(received_error(dispatch));
};


export {
    getResults
}