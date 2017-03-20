let secrets = require('./secrets.json');
import FacebookStrategy from 'passport-facebook';
import GithubStrategy from 'passport-github';
import Users from '../api/users/model';
import {serialize, deserialize} from '../services/Strategy/serialze';
import handleLocalStrategy from '../services/Strategy/local';

export default (passport) => {
    passport.serializeUser(serialize);
    // used to deserialize the user
    passport.deserializeUser(deserialize);

    // local
    passport.use(handleLocalStrategy);
    // failure with github register
    passport.use(new GithubStrategy(secrets.github,
        function (token, refreshToken, profile, done) {
            // asynchronous
            process.nextTick(function () {
                // find the user in the database based on their facebook id
                Users.findOne({'id': profile.id})
                    .then(function (user) {
                        // if the user is found, then log them in
                        if (user) {
                            done(null, user); // user found, return that user
                        } else {
                            // save our user to the database
                            Users.insert(profile._json).then((newUs) => done(null, newUs));
                        }

                    })
                    .catch(done);
            });
        }));
    // =========================================================================
    // FACEBOOK ================================================================
    // =========================================================================
    passport.use(new FacebookStrategy(secrets.facebook,
        // facebook will send back the token and profile
        function (token, refreshToken, profile, done) {
            // asynchronous
            process.nextTick(function () {
                // find the user in the database based on their facebook id
                Users.findOne({'id': profile.id})
                    .then(function (user) {
                        // if the user is found, then log them in
                        if (user) {
                            done(null, user); // user found, return that user
                        } else {
                            // save our user to the database
                            Users.insert(profile._json).then((newUs) => done(null, newUs));
                        }

                    })
                    .catch(done);
            });
        }));

}