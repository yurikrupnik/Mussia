import auth from './../../../config/auth';
import passport from 'passport';
export default (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
    auth(passport);
    app.post('/auth/local',
        passport.authenticate('local', { failureRedirect: '/login' }),
        function(req, res) {
            res.send({sessionssss: res.session});
            // res.redirect('/');
        });

    app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/',
            failureRedirect: '/register'
        }));

    app.get('/auth/logout', function (req, res, next) {
        req.logout();
        next();
    });

}