import Request from '../../services/client/Request';
import {url} from './config';

//

//
import httpMap from '../../redux/http-methods-map';
class Payments extends Request {

    // static URL = URL;
    constructor(url) {
        super(); // altho no contructor
        this.url = url;
        // this.read = super.createDelete(url, )
    }

    // static get url() {
    //     return url;
    //     // return URL;
    // }
    // todo make lots of wierd reqeusts tp play with db and Request
    read(query, params, body) {
        console.log('query', query);
        console.log('params', params);
        console.log('body', body);
        return Request.createRead(this.url, query, params, body);
    }

    // post(query, params) {
        // return Request.createPost(url, query, params);
    // }

    'delete' (ids) { // delete is saved word in js
        return Request.createDelete(this.url, ids);
    }

    // static getCount() {
    //     return super.create('get', countURL);
    // }
}

// let pay = new Payments(url);
// console.log('pay', pay);
//
export default new Payments(url);