import ApiHelper from '../ApiHelper';
const url = '/payments';

class Payments extends ApiHelper {
    constructor() {
        super();
    }

    getPayments() {
        return super.request.get(`${url}`)
            .then(super.returnBody)
            .catch(super.handleError);
    }

    getCount() {
        return this.request.get(`${url}/count`)
            .then(this.returnBody)
            .catch(this.handleError);
    }
}

var ex = new Payments();
debugger

export default new Payments();
