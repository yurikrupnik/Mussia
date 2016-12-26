// import request from 'supertest';
// import server from '../../../server';
// describe('Friends', function () {
//     it('responds to /friends', function testSlash(done) {
//         request(server)
//             .get('/friends')
//             .expect(200)
//             .expect('Content-Type', /json/)
//             .end(function(err, res) {
//                 if (err) {
//                     console.log("There's been an error: getting pyments.");
//                     console.log(err);
//                 } else {
//                     done();
//                 }
//             });
//     });
//
//     it('payments count', function testPath(done) {
//         request(server)
//             .get('/friends/count')
//             .expect(200)
//             .end(function(err, res) {
//                 if (err) {
//                     console.log("There's been an error: getting students.");
//                     console.log(err);
//                 } else {
//                     done();
//                 }
//             });
//     });
// });