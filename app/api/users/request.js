
import request from 'superagent';

import {logout} from '../../redux/actions/user';
export function singout() {
    // return dispatch => {
        return request.get('/auth/logout').then(function (data) {
            return data.body;
        });
    // };
}
export function singin(body) {
    return request.post('/auth/local')
        .send(body)
        .then(function (data) {
            console.log('data', data);
            return data;
        })
}