import Request from '../Request';
const url = '/payments';
class Payments extends Request {

    static getPayments() {
        return Request.get(`${url}`)
            .then(Request.body)
            .catch(Request.error);
    }

    static getCount() {
        return Request.get(`${url}/count`)
            .then(Request.body)
            .catch(Request.error);
    }
}

export default Payments;
// export default new Payments(); // SINGLETON
