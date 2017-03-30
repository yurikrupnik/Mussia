import passport from 'passport';
import auth from './auth';
import {createSocialNetworkRoutes, handleLogin, handleLogout} from './utils';

export default (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
    auth(passport);
    app.post('/auth/local', handleLogin);
    app.get('/auth/logout', handleLogout);
    createSocialNetworkRoutes(app);
}