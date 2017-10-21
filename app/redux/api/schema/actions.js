import axios from 'axios';
import {handleHostAndPrefix} from '../../../api/utils';
import {READ, SCHEMA, PROMISE_TYPES_CHAIN} from '../../constants';

function createStatusActions(name) {
    return PROMISE_TYPES_CHAIN.reduce((acc, next) => {
        // map to actions with lowercase - via pending, success, fail
        acc[next.toLowerCase()] = (payload) => ({type: `${READ}_${name}_${SCHEMA}_${next}`, payload});
        return acc;
    }, {});
}

function createGetSchema(name, loading, url) {
    const statusActions = createStatusActions(name);
    return () => dispatch => {
        dispatch(statusActions.pending());
        dispatch(loading.toggle());
        return axios({
            method: 'get',
            url: `${handleHostAndPrefix()}/${url}/schema`,
        })
            .then(response => {
                dispatch(statusActions.success(response.data));
                dispatch(loading.toggle());
            })
            .catch(error => {
                dispatch(statusActions.fail());
                dispatch(errorReceived(error));
                dispatch(loading.toggle());
                return error;
            });
    };
}
export default createGetSchema;