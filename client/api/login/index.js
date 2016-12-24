import Request from '../Request';
const url = '/register';

class Register extends Request {

    static logUser(params) {
        return Request.create('post', url, params);
    }
}

export default Register;
