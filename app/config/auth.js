import GithubStrategy from 'passport-github';
import {serialize, deserialize} from '../services/express/Strategy/serialze';


import localStrategy from '../services/express/Strategy/local';
import facebookStrategy from '../services/express/Strategy/facebook';

export default (passport) => {
    passport.serializeUser(serialize);
    passport.deserializeUser(deserialize);
    passport.use(localStrategy);
    passport.use(facebookStrategy);
};