import {serialize, deserialize} from './serialze';
import localStrategy from './local';
import facebookStrategy from './facebook';

export default (passport) => {
    passport.serializeUser(serialize);
    passport.deserializeUser(deserialize);
    passport.use(localStrategy);
    passport.use(facebookStrategy);
};