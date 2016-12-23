import ApiHelper from '../ApiHelper';
const url = '/payments';
class Payments extends ApiHelper {

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

export default new Payments(); // SINGLETON
