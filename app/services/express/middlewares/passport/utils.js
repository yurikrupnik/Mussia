import passport from 'passport';
import {validatePassword, generateHash} from '../../../node/pass-hash';
import Users from '../../../../api/users/model';

import faker from 'faker';
import shortid from 'shortid';

let serialize = (user, done) => {
    done(null, user.id);
};
let deserialize = (id, done) => {
    Users.find({id}, done);
};

const checkValidUser = (user, done) => valid => {
    if (!valid) {
        return done(null, false, {message: 'invalid user', user: user});
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
        let newUser = new Users(nuser);
        return generateHash(password)
            .then(handleHash(newUser))
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
        .catch(function (err) {
            console.log('err in catch 1', err );

            done(err)
        });
};

const socialAppsRegisterCallback = (profile, done) => () => {
    return Users.findOne({id: profile.id})
        .then(function (user) {
            if (user) {
                done(null, user); // user found, return that user
            } else {
                let newUser = new Users({
                    id: profile._json.id,
                    email: profile._json.email,
                    name: profile._json.name,
                    picture: profile._json.cover.source
                });
                newUser.save(done);
                // insertUser(newUser, done);
            }

        })
        .catch(done);
};
const socialNetworkStrategy = (token, refreshTocken, profile, done) => process.nextTick(socialAppsRegisterCallback(profile, done));

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