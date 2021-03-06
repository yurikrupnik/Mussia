import express from 'express';
import passport from 'passport';
import { handleLogout } from './controller';
import {loginUrl, logoutUrl} from './config';
let router = express.Router();

import configureStore from '../../redux/store';

router.post(loginUrl, passport.authenticate('local', { failWithError: true }),
    (req, res, next) => res.redirect('/'),
    (err, req, res, next) => {
        console.log('err', err);

        // handle error
        // let store = configureStore();
        // if (err) {
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

router.get(logoutUrl, handleLogout);

export default router;
