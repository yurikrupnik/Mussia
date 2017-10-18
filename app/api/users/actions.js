import {received_error} from '../../redux/errors/actions';
import {handleHostAndPrefix} from '../utils';
import {url, clientModel} from './config';
import axios from 'axios';
import {normalize, schema} from 'normalizr';

import createLoading from '../../redux/api/Loader/actions';
const loading = createLoading(clientModel);

export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

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

export {
    // setCurrentUser,
    fetchUsers
}
