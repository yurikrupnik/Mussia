/*global describe it before after afterEach beforeEach*/
// global methods not to specify in every test - chai
import chai from 'chai';
// import sinon from 'sinon';

global.describe = describe;
global.should = chai.should();
global.expect = chai.expect;
global.before = before;
global.after = after;
global.afterEach = afterEach;
global.beforeEach = beforeEach;
global.it = it;