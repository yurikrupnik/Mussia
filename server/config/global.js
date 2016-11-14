/*global describe it before*/
// global methods not to specify in every test - todo make gulp task to add comments
import chai from 'chai';
// import sinon from 'sinon';

global.describe = describe;
global.should = chai.should();
global.expect = chai.expect;
global.before = before;
global.it = it;