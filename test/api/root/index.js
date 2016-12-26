import request from 'supertest';
import server from '../../../../server';
describe('loading express', function () {
    it('responds to /', function (done) {
        request(server)
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
        request(server)
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