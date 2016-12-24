import request from 'superagent';
let returnBody = res => res.body;
let handleError = err => {
    console.log('yebal', err);
    throw new Error(err);
};


export default class Request {
    // interface - constructor is never called
    static create(method = 'get', url = '/', params = null, query = {}, type = 'json') {
        // console.log('method', method);
        // console.log('url', url);
        // console.log('params', params);
        // console.log('query', query);
        // console.log('type', type);


        return request[method](url)
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