import passport from 'passport';
import {validatePassword, generateHash} from '../../../node/pass-hash';
import Users from '../../../../api/users/model';

import faker from 'faker';
import shortid from 'shortid';

let serialize = (user, done) => {
    console.log('serialize user', user);

    return done(null, user.id);
};
let deserialize = (id, done) => {
    return Users.find({id}, function (err, doc) {
        console.log('err', err);
        console.log('doc', doc);

        return done(err, doc);
    });
};

const checkValidUser = (user, done) => valid => {
    if (!valid) {
        return done(null, false, {message: 'invalid user', user: user}); // todo check it
    } else {
        return done(null, user);
    }
};
const handleHash = user => hash => {
    user.hashPassword = hash;
    return user;
};

const saveUser = done => user => user.save(done);

const checkUserByEmailAndPass = (email, password, done) => user => {
    if (!user) {
        return generateHash(password)
            .then(handleHash(new Users({ email: email, name: faker.name.findName(), id: shortid.generate() })))
            .then(saveUser(done))
            .catch(function (err) {
                console.log('error saving user', err);
            });

    } else {
        return validatePassword(password, user.hashPassword)
            .then(checkValidUser(user, done));
    }
};

const localStrategyHandler = (req, email, password, done) => {
    Users.findOne({email})
        .then(checkUserByEmailAndPass(email, password, done))
        .catch(done);
};

const socialAppsRegisterCallback = (profile, done) => () => {
    return Users.findOne({id: profile.id})
        .then(function (user) {
            if (user) {
                done(null, user); // user found, return that user
            } else {
                const {provider} = profile;
                const newUser = new Users({
                    id: profile.id,
                    email: profile.email || '',
                    name: provider === 'facebook' ? `${profile.name.first_name} ${profile.name.last_name}` : profile.fullName ,
                });
                newUser.save(done);
            }

        })
        .catch(done);
};
const socialNetworkStrategy = (token, refreshTocken, profile, done) => process.nextTick(socialAppsRegisterCallback(profile, done));

const setSocialAuth = (provider) => passport.authenticate(provider, {successRedirect: '/', failureRedirect: '/', scope: ['email', 'name']});

function createSocialNetworkRoutes(app) {
    const socialNetworks = ['facebook', 'flickr'];
    socialNetworks.forEach(function (provider) { // register middlewares
        app.get(`/auth/${provider}`, setSocialAuth(provider));
        app.get(`/auth/${provider}/callback`, setSocialAuth(provider));
    });
}

export {
    serialize,
    deserialize,
    socialNetworkStrategy,
    localStrategyHandler,
    createSocialNetworkRoutes
}