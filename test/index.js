import http from 'http';
import {SERVER} from '../config';
import app from '../app.js';
import ss from './cof';


import chai from 'chai';


let expect = chai.expect();
let should = chai.should();

describe('Server loading', () => {
    before(function () {
        app.listen(SERVER.test.PORT);
    });

    it('should return 200', done => {
        http.get(SERVER.test.url(), res => {
            should.equal(200, res.statusCode);
            done();
        })
    })
});