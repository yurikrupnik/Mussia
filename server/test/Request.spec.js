import Request from '../../client/api/Request';
describe('Request interface',() => {
    it('expect to have static methods', () => {
        expect(Request.get).to.be.a('function');
        expect(Request.post).to.be.a('function');
        expect(Request.put).to.be.a('function');
        expect(Request.delete).to.be.a('function');
        expect(Request.body).to.be.a('function');
        expect(Request.error).to.be.a('function');

        expect(new Request).to.be.instanceof(Request);

        // expect(Request).to.have.keys([
        //     "delete",
        //     "get",
        //     "post",
        //     "put",
        // ]);

    });


    it('expect returnBody to return body', () => {
        expect(Request.body({body: ''})).equal('');
    });
});