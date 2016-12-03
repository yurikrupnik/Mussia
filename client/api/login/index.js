import ApiHelper from '../ApiHelper';
const url = '/register';

class Register extends ApiHelper {
    constructor() {
        super();
    }

    // getPayments() {
    //     return this.request(url)
    //     // .then((response) => { // for fetch(url)
    //     //     console.log('data', response);
    //     //     return response.json();
    //     // })
    //         .then(this.returnBody)
    //         .catch(this.handleError);
    // }
    //
    logUser(params) {
        return this.request.post(`${url}`)
            .send(params)
            .then(this.returnBody)
            .catch(this.handleError);
    }
}

export default new Register();
