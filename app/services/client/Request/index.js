import request from 'superagent';
import {apiPrefix} from '../../../config/env';

let returnBody = res => res.body;
let handleError = err => {
    if (err.status === 403) {
        console.log('found 403 - do some shit if want', err);
    }
    if (err.status === 404) {
        console.log('found 404 - do some shit if want', err);
    }
};

import httpMap from '../../../redux/http-methods-map';


export default class Request {

    static handleMethod(type) {
        if (type in httpMap) {
            return httpMap[type];
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

    static callRead(url, query, params, body) {
        let type = 'read';
        return this.getResource(type, url)
            .query(query)
            .then(returnBody)
            .catch(handleError);
    }

    static callDelete(url, query, params, body) {
        let type = 'delete';
        return this.getResource(type, url)
            .query(query)
            .send(body)
            .then(returnBody)
            .catch(handleError);
    }

    static callCreate(url, query, params) {
        let type = 'create';
        return this.getResource(type, url)
            .query(query)
            .send(params)
            .then(returnBody)
            .catch(handleError);
    }

    static callUpdate(url, query, params) {
        let type = 'update';
        return this.getResource(type, url)
            .query(query)
            .send(params)
            .then(returnBody)
            .catch(handleError);
    }

}
