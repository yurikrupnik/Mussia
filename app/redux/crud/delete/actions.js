import axios from 'axios';
import {handleHostAndPrefix} from '../../../api/utils';
import {DELETE, PROMISE_TYPES_CHAIN} from '../../constants';
import {errorReceived} from './../../errors/actions';

function createStatusActions(name) {
    return PROMISE_TYPES_CHAIN.reduce((acc, next) => {
        // map to actions with lowercase - via pending, success, fail
        acc[next.toLowerCase()] = (payload) => ({type: `${DELETE}_${name}_${next}`, payload});
        return acc;
    }, {});
}

function createDeleteSchema(name, loading, url, dataMapToProps, read) {
    const statusActions = createStatusActions(name);
    return (payload) => (dispatch, getState) => {
        const param = typeof payload === 'string' ? payload : '';
        const ids = Array.isArray(payload) ? payload : [payload];
        dispatch(statusActions.pending());
        dispatch(loading.toggle());
        return axios({ // calls delete on 1 id or array of ids - 2 api in server
            method: 'delete',
            url: `${handleHostAndPrefix()}${url}${param ? '/' + param : ''}`,
            data: param ? {} : {ids}
        })
            .then(res => {
                dispatch(statusActions.success(ids));
                dispatch(loading.toggle());
                return dispatch(read());
                // return res;
            })
            .catch(error => {
                dispatch(statusActions.fail());
                dispatch(errorReceived(error));
                dispatch(loading.toggle());
                return error;
            });
    };
}

export default createDeleteSchema;
