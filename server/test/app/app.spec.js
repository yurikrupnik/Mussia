/*global describe it should before*/
import http from 'http';
import app from '../../app';
import config from '../../config/env';


describe('Server loading', () => {
    before(function () {
        app.listen(config.port);
    });

    it('should return 200', done => {
        http.get(`http://${config.ip}:${config.port}`, res => {
            should.equal(200, res.statusCode);
            done();
        });
    });
});