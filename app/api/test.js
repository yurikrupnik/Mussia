// import payments from './payments';

import request from 'supertest';
import app from '../app';

describe('GET /', function () {
    it('respond with html', function (done) {
        request(app)
            .get('/')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(200, done);

    });
});

describe('GET /payments', function () {

    it('responsed with 403', (done) => {
        request(app)
            .get('/api/payments')
            .expect(403, done);
    })
});

describe('GET /payments', function () {

    beforeEach(() => {

        // todo register user for authanticated requests
        // console.log('app', app);

        request(app)
            .get('/auth/facebook')
    });

    it('responsed with json ', (done) => {
        request(app)
            .get('/api/payments')
            .expect(200, done);
    })
});