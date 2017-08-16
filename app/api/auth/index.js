import {handleLogin, handleLogout} from './controller';
// import {url} from './config';
import express from 'express';
let router =  express.Router();
import passport from 'passport';

import configureStore from '../../redux/store/store';
import {fountUser} from '../../redux/actions/user';

router.post('/auth/login', passport.authenticate('local', { failWithError: true }),
    function(req, res, next) {
        // handle success
        // let store = configureStore();
        // if (req.isAuthenticated()) { // todo client it
        //     store.dispatch(fountUser(req.user));
            // console.log('req.user', req.user);
            // console.log('res.user', res.user);
            // let user = req.user;
            // res.json(user);
            res.redirect('/');
        // }
        // if (req.xhr) { return res.json({ id: req.user.id }); }
    },
    function(err, req, res, next) {
        // handle error
        // let store = configureStore();
        // if (err) { // todo client it
        //     store.dispatch({
        //         type: 'RECEIVED_ERROR',
        //         error: err
        //     });
        // }
        // console.log('err', err);

        // res.locals.errors = err; // todo send error on fail login
        // console.log('res.locals.errors set', res.locals.errors);
        //
        res.redirect('/register');
    });

router.get('/auth/logout', handleLogout);

export default router;
