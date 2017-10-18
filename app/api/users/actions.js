import {received_error} from '../../redux/errors/actions';
import {handleHostAndPrefix} from '../utils';
import {url, clientModel} from './config';
import axios from 'axios';
import {normalize, schema} from 'normalizr';

import createLoading from '../../redux/api/Loader/actions';
const loading = createLoading(clientModel);

const FETCH = 'FETCH';
const DELETE = 'DELETE';
const UPDATE = 'UPDATE';
const CREATE = 'CREATE';


const PENDING = 'PENDING';
const SUCCESS = 'SUCCESS';
const FAIL = 'FAIL';

export const FETCH_USERS_PENDING = `${FETCH}_${clientModel}_${PENDING}`;
export const FETCH_USERS_SUCCESS = `${FETCH}_${clientModel}_${SUCCESS}`;

export const DELETE_USERS_PENDING = `${DELETE}_${clientModel}_${PENDING}`;
export const DELETE_USERS_SUCCESS = `${DELETE}_${clientModel}_${SUCCESS}`;

export const CREATE_USERS_PENDING = `${CREATE}_${clientModel}_${PENDING}`;
export const CREATE_USERS_SUCCESS = `${CREATE}_${clientModel}_${SUCCESS}`;

export const UPDATE_USERS_PENDING = `${UPDATE}_${clientModel}_${PENDING}`;
export const UPDATE_USERS_SUCCESS = `${UPDATE}_${clientModel}_${SUCCESS}`;


// async action
const fetchUsers = params => dispatch => {
    dispatch({type: FETCH_USERS_PENDING, payload: params});
    dispatch(loading.toggle());
    return axios({
        method: 'get',
        url: `${handleHostAndPrefix()}${url}`
    })
        .then(res => { // handle normalize
            const userSchema = new schema.Entity('users', {}, {idAttribute: 'id'});
            const userListSchema = new schema.Array(userSchema);
            return normalize(res.data, userListSchema);
        })
        .then(res => {
            dispatch({
                type: FETCH_USERS_SUCCESS, payload: res
            });
            dispatch(loading.toggle());
            return res;
        })
        .catch(received_error(dispatch));
};

const createUser = params => dispatch => {
    dispatch({type: CREATE_USERS_PENDING, payload: params});
    dispatch(loading.toggle());
    return axios({
        method: 'get',
        url: `${handleHostAndPrefix()}${url}s`
    })
        .then(res => { // handle normalize
            // const userSchema = new schema.Entity('users', {}, {idAttribute: 'id'});
            // const userListSchema = new schema.Array(userSchema);
            // return normalize(res.data, userListSchema);
        })
        .then(res => {
            dispatch({
                type: CREATE_USERS_SUCCESS, payload: res
            });
            dispatch(loading.toggle());
            return res;
        })
        .catch(received_error(dispatch));
};


const deleteUser = params => dispatch => {
    dispatch({type: DELETE_USERS_PENDING, payload: params});
    dispatch(loading.toggle());
    return axios({
        method: 'get',
        url: `${handleHostAndPrefix()}${url}s`
    })
        .then(res => { // handle normalize
            // const userSchema = new schema.Entity('users', {}, {idAttribute: 'id'});
            // const userListSchema = new schema.Array(userSchema);
            // return normalize(res.data, userListSchema);
        })
        .then(res => {
            dispatch({
                type: DELETE_USERS_SUCCESS, payload: res
            });
            dispatch(loading.toggle());
            return res;
        })
        .catch(received_error(dispatch));
};

const updateUser = params => dispatch => {
    dispatch({type: UPDATE_USERS_PENDING, payload: params});
    dispatch(loading.toggle());
    return axios({
        method: 'get',
        url: `${handleHostAndPrefix()}${url}s`
    })
        .then(res => { // handle normalize
            // const userSchema = new schema.Entity('users', {}, {idAttribute: 'id'});
            // const userListSchema = new schema.Array(userSchema);
            // return normalize(res.data, userListSchema);
        })
        .then(res => {
            dispatch({
                type: UPDATE_USERS_SUCCESS, payload: res
            });
            dispatch(loading.toggle());
            return res;
        })
        .catch(received_error(dispatch));
};
export {
    // setCurrentUser,
    fetchUsers,
    createUser,
    updateUser,
    deleteUser
}
