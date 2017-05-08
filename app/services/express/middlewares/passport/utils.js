import passport from 'passport';
import {validatePassword, generateHash} from '../../../node/pass-hash';
import Users from '../../../../api/users/model';

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
            done(null, false);
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
                password: password, // delete this, not saving passwords
                name: 'admin',
                id: 12345
            };
            generateHash(password)
                .then(handleHash(nuser, done));

        } else {
            validatePassword(password, user.hashPassword)
                .then(checkValidUser(user, done));
        }
    }
}

function socialAppsRegisterCallback(profile, done) {
    // find the user in the database based on their provider id
    return function () {
        let id = profile.id;
        return Users.findOne({id})
            .then(function (user) {
                // if the user is found, then log them in
                if (user) {
                    done(null, user); // user found, return that user
                } else {
                    return insertUser(profile._json, done);
                }

            })
            .catch(done);
    }
}

function socialNetworkStrategy(token, refreshTocken, profile, done) {
    process.nextTick(socialAppsRegisterCallback(profile, done));
}

function localStrategyHandler(req, email, password, done) {
    Users.findOne({email})
        .then(checkUserByEmailAndPass(email, password, done))
        .catch(done);
}

function handleLogin(req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect('/login');
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            return res.redirect('/');
        });
    })(req, res, next);
}

function handleLogout(req, res, next) {
    req.logout();
    next();
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
    createSocialNetworkRoutes,
    handleLogin,
    handleLogout
}