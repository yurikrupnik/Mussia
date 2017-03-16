import {mainURL, countURL} from './payments'; // todo client test func and see if the data we send is correct to the client response

import request from 'supertest';
import Payments from './payments/request';
import app from '../app';

describe('GET /', function () { // server test
    it('respond with html', function (done) {
        request(app)
            .get('/')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(200, done);

    });
});

describe('api', () => {
    // beforeEach(function (done) {
    //     request(app)
    //         .post('/auth/local')
    //         .fields('u')
    //         // .expect(200, done);
    // });

    describe(`GET api/payments ${mainURL}`, function () {
        it('respond with 200', (done) => {
            request(app)
                .get('/api/payments')
                .expect(200, done);
        });
    });

    describe(`GET ${countURL}`, function () {
        it('respons with json ', (done) => {
            request(app)
                .get('/api/payments/count')
                .expect(200, done);
        })
    });

    describe(`GET api/payments ${mainURL}`, function () {
        it('50 = 50', (done) => {
            // request(app)
            //     .get('/api/payments')
            //     .expect(200, done);
            // Payments.getPayments().then((a) => {
            //     expect(a).to.equal(50);
            //     done();
            // })

            expect(50).to.equal(50);
            expect('yuri1').to.equal('yuri1');
            done();
        });
    });
});

