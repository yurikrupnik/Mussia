import auth from './../../../config/auth';
import passport from 'passport';
export default (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
    auth(passport);
    app.post('/auth/local', // todo make a find for it and for each here
        passport.authenticate('local'),
        function(req, res) {
            res.redirect('/');
        });

    app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
    app.get('/auth/facebook/callback', passport.authenticate('facebook'));

    app.get('/auth/logout', function (req, res, next) {
        req.logout();
        next();
    });

}