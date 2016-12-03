import ApiHelper from '../ApiHelper';
const url = '/payments';

class Payments extends ApiHelper {
    constructor() {
        super();
    }

    getPayments() {
        return this.request.get(`${url}`)
            .then(this.returnBody)
            .catch(this.handleError);
    }

    getCount() {
        return this.request.get(`${url}/count`)
            .then(this.returnBody)
            .catch(this.handleError);
    }
}

export default new Payments();
