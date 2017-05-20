import passport from 'passport';
import {validatePassword, generateHash} from '../../../node/pass-hash';
import Users from '../../../../api/users/model';

import faker from 'faker';
import shortid from 'shortid';

let serialize = (user, done) => done(null, user.id);
let deserialize = (id, done) => Users.findOne({id}, done);

const handleHash = (user, done) => hash => {
    user.hashPassword = hash;
    insertUser(user, done);
};

const insertUser = (user, done) => Users.insert(user).then(passUser(done));

const passUser = done => user => done(null, user);

const checkValidUser = (user, done) => valid => {
    if (!valid) {
        done(null, false, {message: 'invalid user', user: user});
    } else {
        done(null, user);
    }
};

const checkUserByEmailAndPass = (email, password, done) => user => {
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
};

const socialAppsRegisterCallback = (profile, done) => () => {
    Users.findOne({id: profile.id})
        .then(function (user) {
            if (user) {
                done(null, user); // user found, return that user
            } else {
                insertUser(profile._json, done);
            }

        })
        .catch(done);
};
const socialNetworkStrategy = (token, refreshTocken, profile, done) => process.nextTick(socialAppsRegisterCallback(profile, done));
const localStrategyHandler = (req, email, password, done) => {
    Users.findOne({email})
        .then(checkUserByEmailAndPass(email, password, done))
        .catch(done);
};

const setSocialAuth = (provider) => passport.authenticate(provider, {successRedirect: '/', failureRedirect: '/', scope: ['email']});

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