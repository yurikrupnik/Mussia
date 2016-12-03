import request from 'superagent';

export default class ApiHelper {
    constructor() {
        this.request = request;
    }

    returnBody(res) {
        return res.body;
    }

    handleError(err) {
        console.log('err', err);

    }


}
