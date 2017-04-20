import request from 'superagent';
import {apiPrefix} from '../../../config/env';

import _ from 'lodash';

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

    static createRead(url, query, params) {
        let type = 'read';
        return this.getResource(type, url)
            .query(query)
            .send(params)
            .then(returnBody)
            .catch(handleError);
    }

    static createDelete(url, ids) {
        let type = 'delete';
        return this.getResource(type, url)
            .send(ids)
            .then(returnBody)
            .catch(handleError);
    }

    static createPost(url, query, params) {
        let type = 'create';
        return this.getResource(type, url)
            .send(params)
            .then(returnBody)
            .catch(handleError);
    }

}
