import request from 'superagent';
let returnBody = res => res.body;
let handleError = err => console.log('err', err);
export default class ApiHelper {
    static request = request;
    // static returnBody= returnBody;
    static get body() {
        return returnBody;
        // return res => res.body;
    }

    error(err) {
        console.log('err', err);
    }


}
