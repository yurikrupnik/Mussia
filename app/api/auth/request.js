
import request from 'superagent';

export function logout() {
    return request.get('/auth/logout')
        .then(data => {
            console.log('data', data);

        })
        .catch(err => {
            console.log('err', err);

        });
}
export function login(body) {
    console.log('body', body);

    return request.post('/auth/login')
        .send(body)
        .then(function (data) {
            console.log('data', data);
            return data;
        })
        .catch(err => console.log('err', err));
}