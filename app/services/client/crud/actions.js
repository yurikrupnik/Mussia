import {CREATE, READ, UPDATE, DELETE} from './config';

const dispatchAsyncActionByResource = (resource, query, params, body, prefix) => {
    console.log('resource', resource);

    const URL = resource.url.replace('/', '').toUpperCase();
    const method = prefix.toLowerCase();
    return {
        type: `${prefix}_${URL}`,
        payload: resource[method](query, params, body)
    };
};

const readData = (resource, query, params, body) => dispatchAsyncActionByResource(resource, query, params, body, READ);
const createData = (resource, query, params, body) => dispatchAsyncActionByResource(resource, query, params, body, CREATE);
const deleteData = (resource, query, params, body) => dispatchAsyncActionByResource(resource, query, params, body, DELETE);
const updateData = (resource, query, params, body) => dispatchAsyncActionByResource(resource, query, params, body, UPDATE);

const dispatchRead = Resource => (query, params, body) => dispatch => dispatch(readData(Resource, query, params, body));
const dispatchCreate = Resource => (query, params, body) => dispatch => dispatch(createData(Resource, query, params, body));
const dispatchDelete = Resource => (query, params, body) => dispatch => dispatch(deleteData(Resource, query, params, body));
const dispatchUpdate = Resource => (query, params, body) => dispatch => dispatch(updateData(Resource, query, params, body));

class Actions { // crud actions for the client - create by model
    constructor(model) {
        this.read = dispatchRead(model);
        this.create = dispatchCreate(model);
        this.delete = dispatchDelete(model);
        this.update = dispatchUpdate(model);
    }
}

export default (model) => new Actions(model);