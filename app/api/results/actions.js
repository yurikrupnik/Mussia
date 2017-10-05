import axios from 'axios';
import {received_error} from '../../redux/errors/actions';
import {url} from './config';
import {apiPrefix} from '../../config/env';

export const GET_COUNT = 'GET_COUNT';
export const GOT_COUNT = 'GOT_COUNT';

const getCount = (selected = []) => dispatch => {
    dispatch({type: GET_COUNT});
    return axios({
        method: 'get',
        url: `${apiPrefix}${url}`,
        params: {
            ids: selected.map(v => v._id)
        }
    })
        .then(res => {
            dispatch({type: GOT_COUNT, payload: res.data.map(val => {
                // aggregate results api response with selected for label
                // not needed when api will aggregate for label
                val.label = selected.find(v => v._id === val.answer_id).label;
                return val;
            })})
        })
        .catch(received_error(dispatch));
};


export {
    getCount
}