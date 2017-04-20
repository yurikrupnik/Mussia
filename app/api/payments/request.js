import Request from '../../services/client/Request';
import {url} from './config';

//

//
class Payments extends Request {

    // static URL = URL;
    constructor(url) {
        super(url);
    }

    // static get url() {
    //     return url;
    //     // return URL;
    // }
    // todo make lots of wierd reqeusts tp play with db and Request
    // read(query, params) {
        // console.log('query', query);
        // console.log('params', params);
        // return super.read.query(query).send(params).then(res => res.body);
    // }

    // post(query, params) {
        // return Request.createPost(url, query, params);
    // }

    // 'delete' (ids) { // delete is saved word in js

        // return super.delete.send(ids).then(res => res.body);
    // }

    // static getCount() {
    //     return super.create('get', countURL);
    // }
}

// let pay = new Payments(url);
// console.log('pay', pay);
//
export default new Payments(url);