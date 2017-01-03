import request from 'superagent';
let returnBody = res => res.body;
let handleError = err => {
    console.log('yebal', err);
    throw new Error(err);
};


export default class Request {
    // interface - constructor is never called
    static create(method = 'get', url = '/', params = null, query = {}, type = 'json') {
        return request[method]('http://localhost:4000' + url)
        // .head()
        // .set()
            .type(type)
            .accept(type)
            // .set('Content-Type', 'application/json')
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