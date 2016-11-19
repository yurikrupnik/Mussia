import http from 'http';
import request from 'superagent';
import app from '../../app';
import {host, ip, port} from '../../config/env';

describe('Server loading', () => {
    before(function () {
        app.listen(4000); // can not run on same port as the real server while npm start is up
    });

    it('should return 200', done => {
        http.get(host, res => {
            should.equal(200, res.statusCode);
            done();
        });
    });
    //
    it('expect to return json', done => {
        http.get(`${host}/users`, res => {
            should.equal(200, res.statusCode);
            // test for jjson
            return http.get(`${host}/payments`, res => {
                should.equal(200, res.statusCode);
                // test for jjson
                done();
            });
        });
    });
    //
    // it('expect to return json', done => {
    //     http.get(`${host}/payments`, res => {
    //         should.equal(200, res.statusCode);
    //         // test for jjson
    //         return http.get(`http://${config.ip}:${config.port}/payments`, res => {
    //             should.equal(200, res.statusCode);
    //             // test for jjson
    //             done();
    //         });
    //     });
    // });
});