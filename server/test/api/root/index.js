import request from 'supertest';
import app from '../../../app';
describe('loading express', function () {
    it('responds to /', function testSlash(done) {
        request(app)
            .get('/')
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

    it('404 everything else', function testPath(done) {
        request(app)
            .get('/foo/bar')
            .expect(404)
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