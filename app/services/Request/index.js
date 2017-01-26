import request from 'superagent';
let returnBody = res => res.body;
let handleError = err => {
    if (err.status === 403) {
        console.log('found 403 - do some shit if want');
    }
};

export default class Request {
    // interface - constructor is never called
    static create(method = 'get', url = '/', params = null, query = {}, type = 'json') {
        return request[method](`/api${url}`)
        // .head()
        // .set()
        //     .type(type)
            // .accept(type)
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