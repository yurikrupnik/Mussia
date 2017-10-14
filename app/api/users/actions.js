import {received_error} from '../../redux/errors/actions';
import {checkStatus, parseJSON, handleHostAndPrefix} from '../utils';
import {url} from './config';
import axios from 'axios';
import {normalize, schema} from 'normalizr';
const USERS = 'USERS';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

const setCurrentUser = (user) => dispatch => {
    dispatch({type: SET_CURRENT_USER, payload: user})
};

const fetchUsers = params => dispatch => {
    dispatch({type: FETCH_USERS_PENDING, payload: params});
    return axios({
        method: 'get',
        url: `${handleHostAndPrefix()}${url}`
    })
        .then(res => {
            const userSchema = new schema.Entity('users', {}, {idAttribute: 'id'});
            const userListSchema = new schema.Array(userSchema);
            const normalizedData = normalize(res.data, userListSchema);
            console.log('normalizedData', normalizedData);
            dispatch({
                type: FETCH_USERS_SUCCESS, payload: normalizedData
            });
            return res.data;
        })
        .catch(received_error);
};


export {
    setCurrentUser,
    fetchUsers
}
