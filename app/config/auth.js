import FacebookStrategy from 'passport-facebook';
import GithubStrategy from 'passport-github'
import Users from '../api/users/model'

let secrets = require('./secrets.json');

export default (passport) => {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        Users.findOne({id}, function (err, user) {
            done(err, user);
        });
    });

    // failure with github register
    passport.use(new GithubStrategy(secrets.github,
        function (token, refreshToken, profile, done) {
            // asynchronous
            process.nextTick(function () {

                // find the user in the database based on their facebook id
                Users.findOne({'id': profile.id}, function (err, user) {

                    // if there is an error, stop everything and return that
                    // ie an error connecting to the database
                    if (err)
                        return done(err);

                    // if the user is found, then log them in
                    if (user) {
                        return done(null, user); // user found, return that user
                    } else {
                        // if there is no user found with that facebook id, create them
                        let newUser = {};

                        // set all of the facebook information in our user model
                        newUser.id = profile.id; // set the users facebook id
                        newUser.token = token; // we will save the token that facebook provides to the user
                        newUser.name = profile.displayName || 'custom name';
                        // newUser.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                        // newUser.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

                        // save our user to the database
                        Users.insert(newUser).then(function (newUs) {
                            return done(null, newUs);
                        });
                    }

                });
            });

        }));
    // =========================================================================
    // FACEBOOK ================================================================
    // =========================================================================
    passport.use(new FacebookStrategy(secrets.facebook,
        // facebook will send back the token and profile
        function (token, refreshToken, profile, done) {
            let provider = profile.provider;
            // asynchronous
            process.nextTick(function () {

                // find the user in the database based on their facebook id
                Users.findOne({'id': profile.id}, function (err, user) {

                    // if there is an error, stop everything and return that
                    // ie an error connecting to the database
                    if (err)
                        return done(err);

                    // if the user is found, then log them in
                    if (user) {
                        return done(null, user); // user found, return that user
                    } else {
                        // if there is no user found with that facebook id, create them
                        var newUser = {};

                        // set all of the facebook information in our user model
                        newUser.id = profile.id; // set the users facebook id
                        newUser.token = token; // we will save the token that facebook provides to the user
                        newUser.name = profile.displayName;
                        newUser.provider = provider;
                        // newUser.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                        // newUser.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

                        // save our user to the database
                        Users.insert(newUser).then(function (newUs) {
                            return done(null, newUs);
                        });

                    }

                });
            });

        }));

}