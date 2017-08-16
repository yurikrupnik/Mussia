import {Strategy} from 'passport-flickr';
import {socialNetworkStrategy} from './utils';
let secrets = require('./secrets.json');
export default new Strategy(secrets.flickr, socialNetworkStrategy);