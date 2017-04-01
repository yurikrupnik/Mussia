import request from 'superagent';
import configureStore from '../../../redux/store/store';
import {requestSent, requestReceived} from '../../../redux/actions/loading';

let returnBody = (res) => {
    requestReceived();
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

// function res(data) {
//     let s = '';
//     return function (a) {
//         console.log('', );
//
//         let num = 134 - 4;
//         let store = configureStore();
//         store.dispatch(requestSent);
//         // requestReceived();
//         return data;
//     }
// }
// function req(data) {
//     // console.log('data', data);
//     // let store = configureStore();
//     // store.dispatch(requestSent);
//     requestSent()
//     // return data;
// }


export default class Request {
    // interface - constructor is never called
    // static ['read'] (url = '', params = null, query = {}, type = 'json') {
    //     return request['get'](`/api/${url}`)
    //     // .head()
    //     // .set()
    //     //     .type(type)
    //         // .accept(type)
    //         // .set('Content-Type', 'application/json')
    //         .query(query)
    //         .send(params)
    //         // .sortQuery()
    //         .then(returnBody)
    //         .catch(handleError);
    // }
    //
    //
    // static ['delete']() {
    //     return request.delete()
    // }

    static create(method = 'get', url = '/', params = null, query = {}, type = 'json') {
        // requestSent({
        //     method,
        //     url,
        //     params,
        //     query
        // });

        // let store = configureStore();
        // store.dispatch(requestSent(url, method));
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
            .catch(handleError);
    }
}

export {
    returnBody,
    handleError
}