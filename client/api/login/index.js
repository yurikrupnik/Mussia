import Request from '../Request';
const url = '/register';

class Register extends Request {

    static logUser(params) {
        return Request.post(`${url}`)
            .send(params)
            .then(Request.body)
            .catch(Request.error);
    }
}
// export default new Register();
export default Register;
