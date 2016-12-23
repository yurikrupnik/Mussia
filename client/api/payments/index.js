import ApiHelper from '../ApiHelper';
const url = '/payments';
let num = 0;
class Payments extends ApiHelper {

    constructor() {
        super();
        console.log('Payments num++', num);

    }

    getPayments() {
        return ApiHelper.request.get(`${url}`)
            .then(ApiHelper.body)
            .catch(this.error);
    }

    getCount() {
        return ApiHelper.request.get(`${url}/count`)
            .then(ApiHelper.body)
            .catch(this.error);
    }
}

// var ex = new Payments();

export default new Payments();
