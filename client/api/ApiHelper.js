import request from 'superagent';
let returnBody = res => res.body;
let handleError = err => console.log('err', err);

export default class ApiHelper {
    constructor() {
        this.request = request;
        this.returnBody = returnBody;
        this.handleError = handleError;
    }
}
