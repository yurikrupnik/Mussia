/*global describe it should before*/
import http from 'http';
import app from '../../app';
import config from '../../config/env';
const url = config.url();

describe('Server loading', () => {
    before(function () {
        app.listen(config.port);
    });

    it('should return 200', done => {
        http.get(url, res => {
            should.equal(200, res.statusCode);
            done();
        });
    });

    it('expect to return json', done => {
        http.get(`${url}/users`, res => {
            should.equal(200, res.statusCode);
            // test for jjson
            return http.get(`http://${config.ip}:${config.port}/payments`, res => {
                should.equal(200, res.statusCode);
                // test for jjson
                done();
            });
        });
    });

    it('expect to return json', done => {
        http.get(`${url}/payments`, res => {
            should.equal(200, res.statusCode);
            // test for jjson
            return http.get(`http://${config.ip}:${config.port}/payments`, res => {
                should.equal(200, res.statusCode);
                // test for jjson
                done();
            });
        });
    });
});