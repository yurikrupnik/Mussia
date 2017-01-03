import request from 'superagent';
let returnBody = res => res.body;
let handleError = err => {
    if (err.code === 'ECONNREFUSED') {
        console.log('ECONNREFUSED');

    }
    console.log('yebal', err);
    throw new Error(err);
};

let fullUrl = 'http://localhost:4000';

export default class Request {
    // interface - constructor is never called
    static create(method = 'get', url = '/', params = null, query = {}, type = 'json') {
        return request[method](url)
        // .head()
        // .set()
        //     .type(type)
        //     .accept(type)
        //     .set('Content-Type', 'application/json')
            .query(query)
            .send(params)
            // .sortQuery()
            .then(returnBody)
            .catch(handleError);
    }
}

export {
    returnBody,
    handleError
}