import Request from '../Request';
const url = '/payments';
const countUrl = `${url}/count`;

class Payments extends Request {

    static getPayments() {
        return Request.create('get', url);
    }

    static getCount() {
        return Request.create('get', countUrl);
    }
}

export default Payments;
// export default new Payments(); // SINGLETON
