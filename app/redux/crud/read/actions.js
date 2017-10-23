import axios from 'axios';
import {handleHostAndPrefix} from '../../../api/utils';
import {READ, PROMISE_TYPES_CHAIN} from '../../../constants';
import {errorReceived} from './../../errors/actions';

function createStatusActions(name) {
    return PROMISE_TYPES_CHAIN.reduce((acc, next) => {
        // map to actions with lowercase - via pending, success, fail
        acc[next.toLowerCase()] = (payload) => ({type: `${READ}_${name}_${next}`, payload});
        return acc;
    }, {});
}

function createReadSchema(name, loading, url, dataMapToProps) {
    const statusActions = createStatusActions(name);
    return (payload) => (dispatch, getState) => {
        dispatch(statusActions.pending());
        dispatch(loading.toggle());
        return axios({
            method: 'get',
            url: `${handleHostAndPrefix()}${url}`,
        })
            .then(res => {
                dispatch(statusActions.success(res.data));
                dispatch(loading.toggle());
                // return dispatch(read());
                return res.data;
            })
            .catch(error => {
                dispatch(statusActions.fail());
                dispatch(errorReceived(error));
                dispatch(loading.toggle());
                return error;
            });
    };
}

export default createReadSchema;