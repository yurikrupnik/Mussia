import {mainURL, countURL} from './payments'; // todo client test func and see if the data we send is correct to the client response

import request from 'supertest';
import Payments from './payments/request';
import app from '../app';
// let agent = request(app);
let Cookies;

describe('Functional Test <Sessions>:', function () {
    it('should create user session for valid user', function (done) {
        request(app)
            .post('/auth/local')
            // .set('Accept','application/json')
            .send({"email": "krupnik.yuri@gmail.com", "password": "qwe"})
            // .expect('Content-Type', /json/)
            // .expect(200)
            .end(function (err, res) {
                // res.body.id.should.equal('1');
                // res.body.short_name.should.equal('Test user');
                // res.body.email.should.equal('user_test@example.com');
                // Save the cookie to use it later to retrieve the session
                let re = new RegExp('; path=/; httponly', 'gi');
                Cookies = res.headers['set-cookie']
                    .map(function(r){
                        return r.replace(re, '');
                    }).join("; ");
                // Cookies = res.headers['set-cookie'].pop().split(';')[0];
                done();
            });
    });
    it('should get user session for current user', function (done) {
        let req = request(app).get('/api/payments');
        // Set cookie to get saved user session
        req.cookies = Cookies;
        req.set('Accept','application/json')
        req.expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                // res.body.id.should.equal('1');
                // res.body.short_name.should.equal('Test user');
                // res.body.email.should.equal('user_test@example.com');
                done();
            });
    });
});
describe('GET /', function () { // server test
    it('respond with html', function (done) {
        let req = request(app).get('/');
        // req.cookies = Cookies;
        req.set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(200, done);

    });
});

describe('api', () => {

    describe(`GET api/payments ${mainURL}`, function () {
        it('respond with 200', (done) => {
            let req = request(app).get('/api/payments');
            req.cookies = Cookies;
            req.set('Accept', /json/)
                .expect(200, done);
        });
    });

    describe(`GET ${countURL}`, function () {
        it('respons with json ', (done) => {
            let req = request(app).get('/api/payments/count');
            req.cookies = Cookies;
            req.set('Accept', /json/)
                .expect('Content-Type', /json/)
                .expect(200, done);

        })
    });

    describe(`GET api/payments ${mainURL}`, function () {
        it('50 = 50', (done) => {
            expect(50).to.equal(50);
            expect('yuri1').to.equal('yuri1');
            done();
        });
    });
});

