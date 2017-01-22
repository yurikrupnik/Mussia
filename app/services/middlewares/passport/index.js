
// =====================================
// FACEBOOK ROUTES =====================
// =====================================
// route for facebook authentication and login
import auth from './../../../config/auth';
import passport from 'passport';
export default (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
    auth(passport);
// login facebook
    app.get('/auth/facebook', passport.authenticate('facebook'));
// handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/',
            failureRedirect: '/register'
        }));

}