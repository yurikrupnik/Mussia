/*global describe it expect should*/
describe('True False', () => {

    it('should return true', () => {
        expect(true).to.equal(true);
        should.equal(true, true);
        expect('test').to.be.a('string');
    })
});
