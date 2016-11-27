import request from 'supertest';
import app from '../../app';

import http from 'http';

// describe('Server loading', () => {
//     describe('Root uri', () => {
//         beforeEach(function () {
//             // app.listen(4000);
//             console.log('a');
//
//         });
        // it('expect to return index.html', done => {
        //     http('http://localhost:4000')
        //         .get('/')
        //         .expect('Content-Type', /html/)
        //         .expect('X-powered-By', /Express/)
        //         .expect(200)
        //         .end(function (err, res) {
        //             if (err) throw err;
        //             done();
        //         });
        // });
        // afterEach(function () {
        //     app.
        // })
    // });

    // describe('Root uri error', () => {
    //     it('expect to return 404 page', done => {
    //         request(app)
    //             .get('/dsa')
    //             // .expect('Content-Type', /html/)
    //             // .expect('X-powered-By', /Express/)
    //             .expect(404)
    //             .end(function (err, res) {
    //                 if (err) throw err;
    //                 done();
    //             });
    //     })
    // })
    //
    // describe('JSON requests', () => {
    //     it('expect to return json', done => {
    //         request(app)
    //             .post('/payments')
    //             .expect('Content-Type', /json/)
    //             .expect(200)
    //             .end(function (err, res) {
    //                 if (err) throw err;
    //                 done();
    //             });
    //     });
    //     it('user', () => {
    //         request(app)
    //             .post('/user')
    //             .expect('Content-Type', /json/)
    //             .expect(200)
    //             .end(function (err, res) {
    //                 if (err) throw err;
    //                 done();
    //             });
    //     });
    //     it('users', () => {
    //         request(app)
    //             .post('/users')
    //             .expect('Content-Type', /json/)
    //             .expect(200)
    //             .end(function (err, res) {
    //                 if (err) throw err;
    //                 done();
    //             });
    //     });
    // })


// });