import request from 'superagent';

let returnBody = (res) => {
    return res.body;
};
let handleError = err => {
    if (err.status === 403) {
        console.log('found 403 - do some shit if want', err);
    }
    if (err.status === 404) {
        console.log('found 404 - do some shit if want', err);
    }
};

export default class Request {
    static create(method = 'get', url = '/', params = null, query = {}, type = 'json') {
        // requestSent({
        //     method,
        //     url,
        //     params,
        //     query
        // });

        // let store = configureStore();
        // store.dispatch(requestSent);
        // store.dispatch(requestSent);
        // req(requestReceived);
        return request[method](`/api${url}`)
        // .head()
        // .set()
        //     .type(type)
        // .accept(type)
        // .set('Content-Type', 'application/json')
            .query(query)
            .send(params)
            // .sortQuery()
            // .then(res)
            .then(returnBody)
            // .then(requestReceived)
            .catch(handleError);
    }
}

export {
    returnBody,
    handleError
}