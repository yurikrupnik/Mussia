import LocalStrategy from 'passport-local';
import FacebookStrategy from 'passport-facebook';
import GithubStrategy from 'passport-github';
import Users from '../api/users/model';

import bcrypt from 'bcrypt';

let secrets = require('./secrets.json');

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

function local() {
    return new LocalStrategy(localStrategyParameters, localStrategy);
}

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

    passport.use(local());
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