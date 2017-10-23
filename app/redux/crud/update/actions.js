import axios from 'axios';
import {handleHostAndPrefix} from '../../../api/utils';
import {UPDATE, PROMISE_TYPES_CHAIN} from '../../constants';
import {errorReceived} from './../../errors/actions';

function createStatusActions(name) {
    return PROMISE_TYPES_CHAIN.reduce((acc, next) => {
        // map to actions with lowercase - via pending, success, fail
        acc[next.toLowerCase()] = (payload) => ({type: `${UPDATE}_${name}_${next}`, payload});
        return acc;
    }, {});
}

function createUpdateActions(name, loading, url, dataMapToProps) {
    const statusActions = createStatusActions(name);
    return (payload) => (dispatch, getState) => {
        dispatch(statusActions.pending());
        dispatch(loading.toggle());
        return axios({
            method: 'put',
            url: `${handleHostAndPrefix()}${url}/${payload._id}`,
            data: payload
        })
            .then(res => {
                dispatch(statusActions.success(res.data));
                dispatch(loading.toggle());
                return res;
            })
            .catch(error => {
                dispatch({type: UPDATE_QUIZZES_FAIL, error});
                dispatch(loading.toggle());
                dispatch(errorReceived(error));
                return error;
            });
    };
}

export default createUpdateActions;