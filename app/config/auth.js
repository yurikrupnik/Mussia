import LocalStrategy from 'passport-local';
import FacebookStrategy from 'passport-facebook';
import GithubStrategy from 'passport-github';
import Users from '../api/users/model';

import bcrypt from 'bcrypt';

var secrets = require('./secrets.json');

let serialize = (user, done) => done(null, user.id);

let deserialize = (id, done) => Users.findOne({id}, done);
const localFields = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
};

let localStrategy = (req, email, password, done) => {

    Users.findOne({email})
        .then((user) => {
            if (!user) {
                bcrypt.hashSync(password, bcrypt.genSaltSync(10));
                let hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
                // .then(function (hash) {
                console.log('hash', hash);

                let nuser = {
                    email: email,
                    password: password, // delete this, not saving passwords
                    name: 'admin',
                    hashPassword: hash,
                    id: 12345
                };
                Users.insert(nuser).then((newUs) => done(null, newUs));
                // });

            }
            // if (!compare(password, )) {
            // }
            if (!validPassword(password, user.hashPassword)) { return done(null, false); } // todo

            // let user = {
            //     email: email, password: password
            // };
            if (user) {
                done(null, user); // user found, return that user
            }
            // Users.insert(user).then((newUs) => done(null, newUs));
            // return done(null, user); // save user wtf!!! todo
        })
        .catch((err)=> done(err));
};


function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    // .then(function (hash) {
    //     return hash;
    // })
    // .catch(function (err) {
    //     console.warn('failed to create hash', err);
    // });
}

function validPassword(password, hash) {
    return bcrypt.compareSync(password, hash);
}

export default (passport) => {
    passport.serializeUser(serialize);

    // used to deserialize the user
    passport.deserializeUser(deserialize);

    // local

    passport.use(new LocalStrategy(localFields, localStrategy));
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
                        var newUser = {};

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