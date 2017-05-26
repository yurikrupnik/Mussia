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

export const READ = 'READ';
export const CREATE = 'CREATE';
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
    // error: null
};

const promiseActions = ['PENDING', 'FULFILLED', 'REJECTED'];

export const ACTIONS = [
    {
        actionName: READ,
        handlers: {
            PENDING: reduceReadPending,
            FULFILLED: reduceReadFulfilled,
            REJECTED: reduceError,
        }
    },
    {
        actionName: DELETE,
        handlers: {
            PENDING: reduceDeletePending,
            FULFILLED: reduceDeleteFulfilled,
            REJECTED: reduceError,
        }
    },
    {
        actionName: CREATE,
        handlers: {
            PENDING: reduceCreatePending,
            FULFILLED: reduceCreateFulfilled,
            REJECTED: reduceError,
        }
    },
    {
        actionName: UPDATE,
        handlers: {
            PENDING: reduceUpdatePending,
            FULFILLED: reduceUpdateFulfilled,
            REJECTED: reduceError,
        }
    }
];