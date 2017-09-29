import axios from 'axios';
import {received_error} from '../../redux/errors/actions';
import {url} from './config';
import {apiPrefix} from '../../config/env';

export const GET_RESULTS = 'GET_RESULTS';
export const GOT_RESULTS = 'GOT_RESULTS';

const getResults = (selected = []) => dispatch => {
    dispatch({type: GET_RESULTS});
    return axios({
        method: 'post',
        url: `${apiPrefix}${url}`,
        data: {
            ids: selected.map(v => v._id)
        }
    })
        .then(res => {
            dispatch({type: GOT_RESULTS, payload: res.data.map(val => {
                // aggregate results api response with selected for label
                // not needed when api will aggregate for label
                val.label = selected.find(v => v._id === val.answer_id).label;
                return val;
            })})
        })
        .catch(received_error(dispatch));
};


export {
    getResults
}