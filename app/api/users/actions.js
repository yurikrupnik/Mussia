import {received_error} from '../../redux/errors/actions';
import {toggleIsFetching} from '../../redux/ui/isFetching/actions';
import {handleHostAndPrefix} from '../utils';
import {url} from './config';
import axios from 'axios';
import {normalize, schema} from 'normalizr';
const USERS = 'USERS';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

// async action
const setCurrentUser = (user) => dispatch => {
    dispatch({type: SET_CURRENT_USER, payload: user});

    // dispatch({type: 'SET_SESSION', payload: user.id});
};

// async action
const fetchUsers = params => dispatch => {
    dispatch({type: FETCH_USERS_PENDING, payload: params});
    // dispatch({type: 'TOGGLE_BOOL'});
    dispatch(toggleIsFetching());
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
            // dispatch({type: 'TOGGLE_BOOL'});
            dispatch(toggleIsFetching());
            return res;
        })
        .catch(received_error(dispatch));
};


export {
    setCurrentUser,
    fetchUsers
}
