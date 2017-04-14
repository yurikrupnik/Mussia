import Request from '../../services/client/Request';
import {URL, countURL} from './urls';

class Sluts extends Request {

    static get url() {
        return URL;
    }
    // todo make lots of wierd reqeusts tp play with db and Request
    static get() {
        return Request.create('get', URL);
    }

    // static getCou/nt() {
    //     return super.create('get', countURL);
    // }
}

export default Sluts;