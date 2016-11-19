import request from 'supertest';
import app from '../../app';

describe('Server loading', () => {
    describe('Root uri', () => {
        it('expect to return index.html', done => {
            request(app)
                .get('/')
                .expect('Content-Type', /html/)
                .expect('X-powered-By', /Express/)
                .expect(200)
                .end(function (err, res) {
                    if (err) throw err;
                    done();
                });
        });
    });

    describe('Root uri error', () => {
        it('expect to return 404 page', done => {
            request(app)
                .get('/dsa')
                .expect('Content-Type', /html/)
                .expect('X-powered-By', /Express/)
                .expect(404)
                .end(function (err, res) {
                    if (err) throw err;
                    done();
                });
        })
    })

    it('expect to return json', done => {
        request(app)
            .post('/payments')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
        request(app)
            .post('/users')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });



});