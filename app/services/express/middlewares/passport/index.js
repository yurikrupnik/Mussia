import passport from 'passport';
import auth from './auth';

function createSocialNetworkRoutes(app) {
    const socialNetworks = ['facebook'];
    socialNetworks.forEach(function (network) {
        app.get(`/auth/${network}`, setSocialAuth(network));
        app.get(`/auth/${network}/callback`, setSocialAuth(network));
    });
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
    return passport.authenticate(provider, {scope: ['email']});
}

export default (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
    auth(passport);
    app.post('/auth/local', handleLogin);
    app.get('/auth/logout', handleLogout);
    createSocialNetworkRoutes(app);
}