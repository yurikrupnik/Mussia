// import Request from '../../services/client/Request';
import {URL, countURL} from './config';

//
import request from 'superagent';
import {apiPrefix} from '../../config/env';

let returnBody = res => res.body;
let handleError = err => {
    if (err.status === 403) {
        console.log('found 403 - do some shit if want', err);
    }
    if (err.status === 404) {
        console.log('found 404 - do some shit if want', err);
    }
};

import httpMap from '../../redux/http-methods-map';


class Request {
    static createRead(url, query, params) {
        let type = 'read';
        return request[this.handleMethod(type)](this.handleApiUrl(url))
            .query(query)
            .send(params)
            .then(returnBody)
            .catch(handleError);
    }

    static createDelete(url, ids) {
        let type = 'delete';
        return request[this.handleMethod(type)](this.handleApiUrl(url))
            .send(ids)
            .then(returnBody)
            .catch(handleError);
    }

    static createPost(url, query, params) {
        let type = 'create';
        return request[this.handleMethod(type)](this.handleApiUrl(url))
            .send(params)
            .then(returnBody)
            .catch(handleError);
    }

    static handleApiUrl(url) {
        return `${apiPrefix}${url}`;
    }

    static handleMethod(type) {
        if (type in httpMap) {
            return httpMap[type];
        } else {
            throw Error('wrong method')
        }
    }
}
//
class Payments extends Request {

    // static URL = URL;

    static get url() {
        return URL;
        // return URL;
    }
    // todo make lots of wierd reqeusts tp play with db and Request
    static read(query, params) {
        // console.log('query', query);
        // console.log('params', params);

        console.log('this.name', this.name);

        return Request.createRead(URL, query, params);
    }

    static post(query, params) {
        return Request.createPost(URL, query, params);
    }

    static 'delete' (query, params) { // delete is saved word in js

        return Request.createDelete(URL, query, params);
    }

    // static getCount() {
    //     return super.create('get', countURL);
    // }
}

export default Payments;