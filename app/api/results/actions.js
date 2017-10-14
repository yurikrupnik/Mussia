import axios from 'axios';
import {url, countUrl, answerUrl} from './config';
import { received_error } from '../../redux/errors/actions';
import {checkStatus, parseJSON, handleHostAndPrefix} from '../utils';
import { normalize, schema } from 'normalizr';


export const GET_COUNT = 'GET_COUNT';
export const GOT_COUNT = 'GOT_COUNT';
export const GET_ANSWER = 'GET_ANSWER';
export const GOT_ANSWER = 'GOT_ANSWER';

const getCount = (selected = []) => dispatch => {
    dispatch({type: GET_COUNT});
    return axios({
        method: 'get',
        url: `${handleHostAndPrefix()}${countUrl}`,
        params: {
            ids: selected.map(v => v._id)
        }
    })
        .then(res => {
            dispatch({
                type: GOT_COUNT, payload: res.data.map(val => {
                    // aggregate results api response with selected for label
                    // not needed when api will aggregate for label
                    val.label = selected.find(v => v._id === val.answer_id).label;
                    return val;
                })
            })
        })
        .catch(received_error(dispatch));
};

const getAnswerId = (params) => dispatch => {
    dispatch({type: GET_ANSWER, params: params});
    return axios({
        method: 'get',
        url: `${handleHostAndPrefix()}${answerUrl}`,
        params: params
    })
        .then(res => {
            dispatch({type: GOT_ANSWER, payload: res})
        })
        .catch(received_error(dispatch));
};

export {
    getCount,
    getAnswerId
}