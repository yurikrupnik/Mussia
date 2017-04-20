import Request from '../../services/client/Request';
import {url} from './config';

class Payments extends Request {
    constructor(url) {
        super(url); // Request is just an object to handle superagent
        this.url = url;
    }

    create(query, params, body) {
        return Request.callCreate(this.url, query, params, body);
    }

    // todo make lots of wierd reqeusts tp play with db and Request
    read(query, params, body) {
        return Request.callRead(this.url, query, params, body);
    }

    update(query, params, body) {
        return Request.callUpdate(this.url, query, params, body);
    }

    'delete' (query, params, body) { // delete is saved word in js
        return Request.callDelete(this.url, query, params, body);
    }
}

export default new Payments(url);