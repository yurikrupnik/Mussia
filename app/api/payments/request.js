import Request from '../../services/client/Request';
import {mainURL, countURL} from './urls';

class Payments extends Request {

    static get url() {
        return mainURL;
    }
    // todo make lots of wierd reqeusts tp play with db and Request
    static get() {
        return Request.create('get', mainURL);
    }

    static getCount() {
        return super.create('get', countURL);
    }
}

export default Payments;