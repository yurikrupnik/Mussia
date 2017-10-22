import axios from 'axios';
import {url, clientModel} from './config';
import {handleHostAndPrefix} from '../utils';
import {errorReceived} from '../../redux/errors/actions';
import createLoading from '../../redux/crud/loader/actions';
import createSchemaActions from '../../redux/crud/schema/actions';
import createDeleteActions from '../../redux/crud/delete/actions';
import createReadActions from '../../redux/crud/read/actions';
import createCreateActions from '../../redux/crud/create/actions';
import {SUCCESS, READ, DELETE, UPDATE, FAIL, CREATE, PENDING} from '../../redux/constants';
import {mapToProps} from './selectors';

const loading = createLoading(clientModel);
const getSchema = createSchemaActions(clientModel, loading, url, mapToProps);
const remove = createDeleteActions(clientModel, loading, url, mapToProps);
const read = createReadActions(clientModel, loading, url, mapToProps);
const create = createCreateActions(clientModel, loading, url, mapToProps);
// const update = createUpdateActions(clientModel, loading, url, mapToProps);

export const READ_QUIZZES_PENDING = `${READ}_${clientModel}_${PENDING}`;
export const READ_QUIZZES_SUCCESS = `${READ}_${clientModel}_${SUCCESS}`;
export const READ_QUIZZES_FAIL = `${READ}_${clientModel}_${FAIL}`;
// const read = (params = {}) => dispatch => {
//     dispatch({type: READ_QUIZZES_PENDING, params});
//     dispatch(loading.toggle());
//     return axios({
//         method: 'get',
//         url: `${handleHostAndPrefix()}${url}`,
//     })
//         .then(res => {
//             dispatch({type: READ_QUIZZES_SUCCESS, payload: res.data});
//             dispatch(loading.toggle());
//             // return payload;
//         })
//         .catch(error => {
//             dispatch({type: READ_QUIZZES_FAIL, error});
//             dispatch(loading.toggle());
//             dispatch(errorReceived(error));
//             return error;
//         });
// };

// ============ delete
export const DELETE_QUIZZES_PENDING = `${DELETE}_${clientModel}_${PENDING}`;
export const DELETE_QUIZZES_SUCCESS = `${DELETE}_${clientModel}_${SUCCESS}`;
export const DELETE_QUIZZES_FAIL = `${DELETE}_${clientModel}_${FAIL}`;
// const remove = payload => dispatch => {
//     const param = typeof payload === 'string' ? payload : '';
//     const ids = Array.isArray(payload) ? payload : [payload];
//     dispatch({type: DELETE_QUIZZES_PENDING, payload});
//     dispatch(loading.toggle());
//     return axios({ // calls delete on 1 id or array of ids - 2 api in server
//         method: 'delete',
//         url: `${handleHostAndPrefix()}${url}${param ? '/' + param : ''}`,
//         data: param ? {} : {ids}
//     })
//         .then(res => {
//             dispatch({
//                 type: DELETE_QUIZZES_SUCCESS, payload: ids
//             });
//             dispatch(loading.toggle());
//             return dispatch(read());
//         })
//         .catch(error => {
//             dispatch({type: DELETE_QUIZZES_FAIL, error});
//             dispatch(loading.toggle());
//             dispatch(errorReceived(error));
//             return error;
//         });
// };

export const CREATE_QUIZZES_PENDING = `${CREATE}_${clientModel}_${PENDING}`;
export const CREATE_QUIZZES_SUCCESS = `${CREATE}_${clientModel}_${SUCCESS}`;
export const CREATE_QUIZZES_FAIL = `${CREATE}_${clientModel}_${FAIL}`;
// const create = payload => dispatch => {
//     dispatch({type: CREATE_QUIZZES_PENDING, payload});
//     dispatch(loading.toggle());
//     return axios({
//         method: 'post',
//         url: `${handleHostAndPrefix()}${url}`,
//         data: payload
//     })
//         .then(res => {
//             dispatch({
//                 type: CREATE_QUIZZES_SUCCESS, payload: res.data
//             });
//             dispatch(loading.toggle());
//         })
//         .catch(error => {
//             dispatch({type: CREATE_QUIZZES_FAIL, error});
//             dispatch(loading.toggle());
//             dispatch(errorReceived(error));
//             return error;
//         });
// };

export const UPDATE_QUIZZES_PENDING = `${UPDATE}_${clientModel}_${PENDING}`;
export const UPDATE_QUIZZES_SUCCESS = `${UPDATE}_${clientModel}_${SUCCESS}`;
export const UPDATE_QUIZZES_FAIL = `${UPDATE}_${clientModel}_${FAIL}`;
const update = params => dispatch => {
    dispatch({type: UPDATE_QUIZZES_PENDING, payload: params});
    dispatch(loading.toggle());
    return axios({
        method: 'put',
        url: `${handleHostAndPrefix()}${url}/${params._id}`,
        data: params
    })
        .then(res => {
            dispatch({
                type: UPDATE_QUIZZES_SUCCESS, payload: res.data
            });
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

// current = id

// selected = [id]

//

export {
    read,
    remove,
    create,
    update,
    getSchema
    // setSelectedQuiz
}