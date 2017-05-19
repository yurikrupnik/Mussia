import passport from 'passport';
import {validatePassword, generateHash} from '../../../node/pass-hash';
import Users from '../../../../api/users/model';

import faker from 'faker';
import shortid from 'shortid';

let serialize = (user, done) => done(null, user.id);
let deserialize = (id, done) => Users.findOne({id}, done);

function handleHash(user, done) {
    return function (hash) {
        user.hashPassword = hash;
        insertUser(user, done);
    }
}

function insertUser(user, done) {
    return Users.insert(user)
        .then(passUser(done));
}

function passUser(done) {
    return function (user) {
        return done(null, user);
    }
}

function checkValidUser(user, done) {
    return function (valid) {
        if (!valid) {
            // done(new Error('bad login'));
            done(null, false, {message: 'invalid user', user: user});
        } else {
            done(null, user);
        }
    }
}

function checkUserByEmailAndPass(email, password, done) {
    return function (user) {
        if (!user) {
            let nuser = { // todo use here some User model constructor
                email: email,
                name: 'admin',
                picture: {
                    data: {
                        url: faker.internet.avatar()
                    }
                },
                id: shortid.generate()
            };
            generateHash(password)
                .then(handleHash(nuser, done));

        } else {
            validatePassword(password, user.hashPassword)
                .then(checkValidUser(user, done));
        }
    }
}

function socialAppsRegisterCallback(token, refreshTocken, profile, done) {
    // find the user in the database based on their provider id
    return function () {
        profile._json.token = refreshTocken || token;
        let email = profile.email;

        return Users.findOne({id: profile.id})
            .then(function (user) {
                // if the user is found, then log them in
                console.log('user', user);

                if (user) {
                    done(null, user); // user found, return that user
                } else {
                    insertUser(profile._json, done);
                }

            })
            .catch(done);
    }
}

function socialNetworkStrategy(token, refreshTocken, profile, done) {
    process.nextTick(socialAppsRegisterCallback(token, refreshTocken, profile, done));
}

function localStrategyHandler(req, email, password, done) {
    Users.findOne({email})
        .then(checkUserByEmailAndPass(email, password, done))
        .catch(done);
}

function setSocialAuth(provider) {
    return passport.authenticate(provider, {successRedirect: '/', scope: ['email']});
}

function createSocialNetworkRoutes(app) {
    const socialNetworks = ['facebook'];
    socialNetworks.forEach(function (network) {
        app.get(`/auth/${network}`, setSocialAuth(network));
        app.get(`/auth/${network}/callback`, setSocialAuth(network));
    });
}

export {
    serialize,
    deserialize,
    socialNetworkStrategy,
    localStrategyHandler,
    createSocialNetworkRoutes
}