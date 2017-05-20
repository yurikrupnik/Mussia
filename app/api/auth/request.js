
import request from 'superagent';

export function logout() {
    return request.get('/auth/logout');
}
export function login(body) {
    console.log('body', body);

    return request.post('/auth/login')
        .send(body);
        // .then(function (data) {
        //     console.log('data', data);
        //     return data;
        // })
        // .catch(err => console.warn('err', err));
}