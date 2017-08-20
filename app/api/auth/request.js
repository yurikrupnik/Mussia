
// import request from 'superagent';
import axios from 'axios';

export function logout() {
    return axios({
        method:'get',
        url:'/auth/logout'
    });
}

// export function login(body) { //
//     return axios({
//         method:'post',
//         url:'/auth/login',
//         data: body,
//     });
//     request.post('/auth/login')
    //     .send(body);
        // .then(function (data) {
        //     console.log('data', data);
        //     return data;
        // })
        // .catch(err => console.warn('err', err));
// }