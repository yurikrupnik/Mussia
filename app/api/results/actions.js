import axios from 'axios';
import {url, countUrl, answerUrl, clientModel} from './config';
import {checkStatus, parseJSON, handleHostAndPrefix} from '../utils';
import { normalize, schema } from 'normalizr';
import createLoading from '../../redux/api/Loader/actions';
import {errorReceived} from '../../redux/errors/actions';
const loading = createLoading(clientModel);

export const GET_COUNT = 'GET_COUNT';
export const GOT_COUNT = 'GOT_COUNT';
export const GET_ANSWER = 'GET_ANSWER';
export const GOT_ANSWER = 'GOT_ANSWER';

const getCount = (selected = [], callback) => dispatch => {
    dispatch({type: GET_COUNT});
    dispatch(loading.toggle());
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
            });
            dispatch(loading.toggle());
        })
        .catch(error => {
            // dispatch({type: FETCH_USERS_FAIL, error});
            dispatch(loading.toggle());
            dispatch(errorReceived(error));
        });
};

const getAnswerId = (params) => dispatch => {
    dispatch({type: GET_ANSWER, params: params});
    dispatch(loading.toggle());
    return axios({
        method: 'get',
        url: `${handleHostAndPrefix()}${answerUrl}`,
        params: params
    })
        .then(res => {
            dispatch({type: GOT_ANSWER, payload: res});
            dispatch(loading.toggle());
        })
        .catch(error => {
            // dispatch({type: FETCH_USERS_FAIL, error});
            dispatch(loading.toggle());
            dispatch(errorReceived(error));
        });
};

export {
    getCount,
    getAnswerId
}