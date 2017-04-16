import Request from '../../services/client/Request';
import {URL, countURL} from './urls';

class Payments extends Request {

    // static URL = URL;

    static get url() {
        return URL;
        // return URL;
    }
    // todo make lots of wierd reqeusts tp play with db and Request
    static read(query, params) {
        // console.log('query', query);
        // console.log('params', params);

        return Request.createRead(URL, query, params);
    }

    static post(query, params) {
        return Request.createPost(URL, query, params);
    }

    static 'delete' (query, params) {
        return Request.createDelete(URL, query, params);
    }

    // static getCount() {
    //     return super.create('get', countURL);
    // }
}

export default Payments;