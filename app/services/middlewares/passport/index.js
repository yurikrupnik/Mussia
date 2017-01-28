import auth from './../../../config/auth';
import passport from 'passport';
export default (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
    auth(passport);
    app.get('/auth/facebook', passport.authenticate('facebook'));
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/',
            failureRedirect: '/register'
        }));

}