import Request from '../../services/client/Request';
import {URL, countURL} from './urls';

class Payments extends Request {

    static get url() {
        return URL;
    }
    // todo make lots of wierd reqeusts tp play with db and Request
    static get() {
        return Request.create('get', URL);
    }

    static getCount() {
        return super.create('get', countURL);
    }
}

export default Payments;