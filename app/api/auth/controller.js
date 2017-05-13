import passport from 'passport';

function handleLogin(req, res, next) {
    passport.authenticate('local', function (err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect('/register');
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