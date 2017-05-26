import Request from '../../services/client/Request';
import {url, selector} from './config';
// import Model from '../../api/payments/payment.model';
class Payments extends Request {
    constructor() {
        super(); // Request is just an object to handle superagent
        this.url = url;
        this.selector = selector;
    }

    create(query, params, body) {
        return Request.callCreate(this.url, query, params, body);
    }

    // todo make lots of wierd reqeusts tp play with db and Request
    read(readConfig) {
        return Request.callRead(this.url, readConfig);
    }

    update(query, params, body) {
        return Request.callUpdate(this.url, query, params, body);
    }

    'delete' (query, params, body) { // delete is saved word in js
        return Request.callDelete(this.url, query, params, body);
    }
}

export default new Payments();