import request from 'superagent';
import {apiPrefix} from '../../../config/env';

let returnBody = res => res.body;

import {received_error} from '../../../redux/actions/errors';

let handleError = err => {
    if (err.status === 403) {
        console.log('found 403 - do some shit if want', err);
    }
    if (err.status === 404) {
        console.log('found 404 - do some shit if want', err);
    }
    // throw new Error(err);
    received_error(err);
    // return err;
};

import {crudActionMap} from '../crud/config';


export default class Request {

    static handleMethod(type) {
        if (type in crudActionMap) {
            return crudActionMap[type];
        } else {
            throw Error('wrong method')
        }
    }

    static handleApiUrl(url) {
        return `${apiPrefix}${url}`;
    }

    static getResource(type, url) {
        return request[this.handleMethod(type)](this.handleApiUrl(url))
    }

    static callRead(url, body) {
        let type = 'read';
        let {query = ''} = body;
        console.log('url', url);

        return this.getResource(type, url)
            .query(query)
            .then(returnBody)
            .catch(handleError);
    }

    static callDelete(url, query, params, body) {
        let type = 'delete';
        return this.getResource(type, url) // delete by sending ids in body
            .send(body)
            .then(returnBody)
            .catch(handleError);
    }

    static callCreate(url, query, params, body) {
        let type = 'create';
        return this.getResource(type, url)
            .send(body)
            .then(returnBody)
            .catch(handleError);
    }

    static callUpdate(url, query, params, body) {
        let type = 'update';
        // console.log('body', body);
        // console.log('body', params);
        return this.getResource(type, url)
            .send(Object.assign({}, body, {_id: params.id}))
            .then(returnBody)
            .catch(handleError);
    }

}
