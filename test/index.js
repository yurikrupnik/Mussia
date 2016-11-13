import http from 'http';
import config from '../server/config/env';
import app from '../server/app.js';


import chai from 'chai';


let expect = chai.expect();
let should = chai.should();

describe('Server loading', () => {
    before(function () {
        app.listen(config.port);
    });

    it('should return 200', done => {
        http.get(`http://${config.ip}:${config.port}`, res => {
            should.equal(200, res.statusCode);
            done();
        })
    })
});