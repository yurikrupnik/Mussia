import request from 'supertest';
import app from '../../../app';
describe('loading express', function () {
    it('responds to /payments', function testSlash(done) {
        request(app)
            .get('/payments')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) {
                    console.log("There's been an error: getting pyments.");
                    console.log(err);
                } else {
                    done();
                }
            });
    });

    it('payments count', function testPath(done) {
        request(app)
            .get('/payments/count')
            .expect(200)
            .end(function(err, res) {
                if (err) {
                    console.log("There's been an error: getting students.");
                    console.log(err);
                } else {
                    done();
                }
            });
    });
});