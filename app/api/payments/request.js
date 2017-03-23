import Request from '../../services/Request';
import {mainURL, countURL} from './urls';

class Payments extends Request {


    // todo make lots of wierd reqeusts tp play with db and Request
    static getPayments() {
        return Request.create('get', mainURL);
    }

    static getCount() {
        return super.create('get', countURL);
    }
}

export default Payments;