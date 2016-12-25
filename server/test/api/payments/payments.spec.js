import request from 'supertest';
import server from '../../../server';
describe('Payment end point', function () {
    it('responds to /payments', function testSlash(done) {
        request(server)
            .get('/payments')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) {
                    console.log("There's been an errors: getting pyments.");
                    console.log(err);
                } else {
                    done();
                }
            });
    });

    it('payments count', function testPath(done) {
        request(server)
            .get('/payments/count')
            .expect(200)
            .end(function(err, res) {
                if (err) {
                    console.log("There's been an errors: getting students.");
                    console.log(err);
                } else {
                    done();
                }
            });
    });
});