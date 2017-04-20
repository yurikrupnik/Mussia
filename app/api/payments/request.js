import Request from '../../services/client/Request';
import {url} from './config';

class Payments extends Request {
    constructor(url) {
        super(url); // Request is just an object to handle superagent
        this.url = url;
    }

    // todo make lots of wierd reqeusts tp play with db and Request
    read(query, params, body) {
        console.log('query', query);
        console.log('params', params);
        console.log('body', body);
        return Request.createRead(this.url, query, params, body);
    }


    'delete' (query, params, body) { // delete is saved word in js
        return Request.createDelete(this.url, query, params, body);
    }

}

export default new Payments(url);