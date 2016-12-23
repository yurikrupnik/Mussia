import request from 'superagent';
let returnBody = res => res.body;
let handleError = err => console.log('err', err);

const METHODS = [
    'get',
    'post',
    'put',
    'delete'
];

let symbols =[Symbol('get'), Symbol('post'), Symbol('put'), Symbol('delete')];

console.log('symbols', symbols);

export default class Request {
    // interface - constructor is never called
    * [Symbol.iterator](a) {
        console.log('a', a);
            yield {s: 's'};
    }
    // http methods
    static get get() {
        return request.get;
    }

    static get post() {
        return request.post;
    }

    static get delete() {
        return request.delete;
    }

    static get put() {
        return request.put;
    }

    // handle promises
    static get body() {
        return returnBody;
    }

    static get error() {
        return handleError
    }

}
