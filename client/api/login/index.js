import ApiHelper from '../ApiHelper';
const url = '/register';

class Register extends ApiHelper {
    constructor() {
        super();
    }

    logUser(params) {
        return this.request.post(`${url}`)
            .send(params)
            .then(this.returnBody)
            .catch(this.handleError);
    }
}

export default new Register();
