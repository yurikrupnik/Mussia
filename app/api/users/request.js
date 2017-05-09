
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
export function singin(body) {
    return request.post('/auth/local')
        .send(body)
        .then(function (data) {
            console.log('data', data);
            return data;
        })
}