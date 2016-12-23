import request from 'superagent';
let returnBody = res => res.body;
let handleError = err => console.log('err', err);
let num = 0;
export default class ApiHelper {

    constructor() {
        // throw new Error('u are creating api helper');
        console.log('ApiHelper num++', num++);

    }
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
