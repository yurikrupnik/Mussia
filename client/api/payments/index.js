import ApiHelper from '../ApiHelper';
const url = '/payments';

class Payments extends ApiHelper {
    constructor() {
        super();
    }

    getPayments() {
        return this.request(url)
        // .then((response) => { // for fetch(url)
        //     console.log('data', response);
        //     return response.json();
        // })
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
