import axios from 'axios';
import {handleHostAndPrefix} from '../../../api/utils';
import {READ, SCHEMA, PROMISE_TYPES_CHAIN} from '../../constants';
import {isEmpty} from 'lodash';
// import {mapToProps} from './selectors';
import {errorReceived} from './../../errors/actions';
function createStatusActions(name) {
    return PROMISE_TYPES_CHAIN.reduce((acc, next) => {
        // map to actions with lowercase - via pending, success, fail
        acc[next.toLowerCase()] = (payload) => ({type: `${READ}_${name}_${SCHEMA}_${next}`, payload});
        return acc;
    }, {});
}
function createDeleteSchema(name, loading, url, dataMapToProps) {
    const statusActions = createStatusActions(name);
    return (payload) => (dispatch, getState) => {
        const param = typeof payload === 'string' ? payload : '';
        const ids = Array.isArray(payload) ? payload : [payload];
        dispatch(statusActions.pending());
        dispatch(loading.toggle());
        // const schema = mapToProps(dataMapToProps(getState()));
        // if (isEmpty(schema)) {
        //     dispatch(statusActions.pending());
        //     dispatch(loading.toggle());
        //     return axios({
        //         method: 'get',
        //         url: `${handleHostAndPrefix()}${url}/schema`,
        //     })
        //         .then(response => {
        //             dispatch(statusActions.success(response.data));
        //             dispatch(loading.toggle());
        //         })
        //         .catch(error => {
        //             dispatch(statusActions.fail());
        //             dispatch(errorReceived(error));
        //             dispatch(loading.toggle());
        //             return error;
        //         });
        // }
        return axios({ // calls delete on 1 id or array of ids - 2 api in server
            method: 'delete',
            url: `${handleHostAndPrefix()}${url}${param ? '/' + param : ''}`,
            data: param ? {} : {ids}
        })
            .then(res => {
                dispatch(statusActions.success(ids));
                dispatch(loading.toggle());
                return dispatch(read());
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