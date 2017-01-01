import Request, {
    handleError,
    returnBody
} from './index';
let fakeData = [{a: 1}, {a: 2}];
import sinon from 'sinon';


describe('returnBody function', () => {
    it('expect to return body prop of an object', () => {
        expect(returnBody({body: fakeData})).eql(fakeData);
    });

    it('expect to return body prop of an object', () => {
        expect(returnBody({})).eql(undefined);
    });
});

describe('handleError function', () => { // todo
    let spy = sinon.spy(handleError);
    let p = new Promise((resolve, reject) => {
        reject('te');
    });
    it('expect to log error', () => {
        // p.catch(spy);
        // expect(p).equal('te');
        // console.log('spy.calledOnce', spy.called);
        // spy.calledOnce;
        expect(spy).to.not.throw('Error');
        // expect(spy.calledOnce).to.eqaul(true);
        // expect(spy.calledTwice).to.eqaul(false);
    });
});


describe('Request interface', () => {
    it('expect to have static method create', () => {
        expect(Request.create).to.be.a('function');
    });

    it('expect Request to be an interface', () => {
        expect(new Request).to.be.instanceof(Request);
        expect(Request).not.to.be.instanceof(Request); // test for interface
        expect(Request).to.be.instanceof(Object);
    });


});