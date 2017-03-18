import LocalStrategy from 'passport-local';
import FacebookStrategy from 'passport-facebook';
import GithubStrategy from 'passport-github';
import Users from '../api/users/model';

import bcrypt from 'bcrypt';

var secrets = require('./secrets.json');

let serialize = (user, done) => done(null, user.id);
let deserialize = (id, done) => Users.findOne({id}, done);
const localStrategyParameters = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
};

let localStrategy = (req, email, password, done) => {

    Users.findOne({email})
        .then((user) => {
            if (!user) {
                let nuser = {
                    email: email,
                    password: password, // delete this, not saving passwords
                    name: 'admin',
                    id: 12345
                };
                nuser.hashPassword = generateHash(password);
                Users.insert(nuser).then((newUs) => done(null, newUs));
            } else {
                if (!validPassword(password, user.hashPassword)) { return done(null, false); } // todo
                done(null, user); // user found, return that user
            }
        })
        .catch((err)=> done(err));
};


function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10)); // todo not sync
}

function validPassword(password, hash) { // todo not sync
    return bcrypt.compareSync(password, hash);
}

export default (passport) => {
    passport.serializeUser(serialize);

    // used to deserialize the user
    passport.deserializeUser(deserialize);

    // local

    passport.use(new LocalStrategy(localStrategyParameters, localStrategy));
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
                        newUser.name = profile.displayName || 'custom nanme';
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