import http from 'http';
import assert from 'assert';
import {SERVER} from '../config';
import '../index.js';
let url = SERVER.URL();

import chai from 'chai';
let expect = chai.expect();
let should = chai.should();

describe('Server loading', () => {
    it('should return 200', done => {
        http.get(`http://${url}`, res => {
            should.equal(200, res.statusCode);
            done();
        })
    })
});