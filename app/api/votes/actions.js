import axios from 'axios';
import { received_error } from '../../redux/errors/actions';
import { url } from './config';
import { apiPrefix } from '../../config/env';

export const GET_VOTES = 'GET_VOTES';
export const GOT_VOTES = 'GOT_VOTES';
// export const GET_QUIZZES = 'GET_QUIZZES';
// export const GOT_QUIZZES = 'GOT_QUIZZES';

// To Be Added - write actions to expose to the client

const getVotes = params => dispatch => {
    dispatch({ type: GET_VOTES });
    return axios({
        method: 'get',
        url: `${apiPrefix}${url}`,
        params
    })
        .then(res => {
            dispatch({ type: GOT_VOTES, payload: res.data })
        })
        .catch(received_error(dispatch));
};


export {
    getVotes
}