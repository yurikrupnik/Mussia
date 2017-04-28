import {
    reduceReadPending,
    reduceReadFulfilled,
    reduceError,
    reduceDeletePending,
    reduceDeleteFulfilled,
    reduceCreatePending,
    reduceCreateFulfilled,
    reduceUpdatePending,
    reduceUpdateFulfilled
} from './reducers';

export const CREATE = 'CREATE';
export const READ = 'READ';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

export const crudActionMap = {
    'create': 'post', // client: server
    'read': 'get',
    'update': 'post',
    'delete': 'delete'
};

const crudOperations = [
    CREATE, READ, UPDATE, DELETE
];

export const initialState = {
    data: [],
    active: false,
    error: null
};

const promiseActions = ['PENDING', 'FULFILLED', 'ERROR'];

export const ACTIONS = [
    {
        actionName: READ,
        handlers: {
            PENDING: reduceReadPending,
            FULFILLED: reduceReadFulfilled,
            ERROR: reduceError,
        }
    },
    {
        actionName: DELETE,
        handlers: {
            PENDING: reduceDeletePending,
            FULFILLED: reduceDeleteFulfilled,
            ERROR: reduceError,
        }
    },
    {
        actionName: CREATE,
        handlers: {
            PENDING: reduceCreatePending,
            FULFILLED: reduceCreateFulfilled,
            ERROR: reduceError,
        }
    },
    {
        actionName: UPDATE,
        handlers: {
            PENDING: reduceUpdatePending,
            FULFILLED: reduceUpdateFulfilled,
            ERROR: reduceError,
        }
    }
];