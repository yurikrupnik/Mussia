import passport from 'passport';

function handleLogin(req, res, next) {
    passport.authenticate('local', function (err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            res.redirect('/register');
        }
        req.logIn(user, function (err) {
            if (err) {
                next(err);
            }
            res.redirect('/');
        });
    })(req, res, next);
}

function handleLogout(req, res, next) {
    req.session.destroy(function (err) {
        if (err) {
            next(err);
        } else res.redirect('/');
    });
}

export {
    handleLogin,
    handleLogout
}