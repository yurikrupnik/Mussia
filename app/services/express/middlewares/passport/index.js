import passport from 'passport';
import auth from './auth';

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


export default (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
    auth(passport);
    app.post('/auth/local', handleLogin);
    app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));
    app.get('/auth/facebook/callback', passport.authenticate('facebook'));
    app.get('/auth/logout', handleLogout);
}