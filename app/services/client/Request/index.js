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

const httpMap = {
    'read': 'get',
    'create': 'post',
    'update': 'update',
    'delete': 'delete'
};

export default class Request {
    static createRead(url, query, params) {
        let type = 'read';
        return request[this.handleMethod(type)](this.handleUrl(url))
            .query(query)
            .send(params)
            .then(returnBody)
            .catch(handleError);
    }

    static createDelete(url, query, params) {
        let type = 'delete';
        return request[this.handleMethod(type)](this.handleUrl(url))
            .query(query)
            .send(params)
            .then(returnBody)
            .catch(handleError);
    }

    static createPost(url, query, params) {
        let type = 'create';
        return request[this.handleMethod(type)](this.handleUrl(url))
            .send(params)
            .then(returnBody)
            .catch(handleError);
    }

    static handleUrl(url) {
        return `${apiPrefix}${url}`;
    }

    static handleMethod(type) {
        if (type in httpMap) {
            return httpMap[type];
        } else {
            throw Error('wrong method')
        }
    }


    // static create(url = '/', params = null, query = {}, type = 'json') {
    //     // requestSent({
    //     //     method,
    //     //     url,
    //     //     params,
    //     //     query
    //     // });
    //
    //     // let store = configureStore();
    //     // store.dispatch(requestSent);
    //     // store.dispatch(requestSent);
    //     // req(requestReceived);
    //     return request[method](`/api${url}`)
    //     // .head()
    //     // .set()
    //     //     .type(type)
    //     // .accept(type)
    //     // .set('Content-Type', 'application/json')
    //         .query(query)
    //         .send(params)
    //         // .sortQuery()
    //         // .then(res)
    //         .then(returnBody)
    //         // .then(requestReceived)
    //         .catch(handleError);
    // }
}

export {
    returnBody,
    handleError
}