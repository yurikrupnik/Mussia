import configureStore from '../../../../redux/store/store';
// config redux store and save in locals - template will use it to render initialized app with server side state

import {fountUser} from '../../../../redux/actions/user';

export default (req, res, next) => {
    console.log('req.errors get', res.locals.errors);

    let store = configureStore();
    if (req.isAuthenticated()) { // todo client it
        store.dispatch(fountUser(req.user));
    }
    // store.dispatch(fetchPayments()).then(() => {
    // console.log('req.authInfo', req.authInfo);
    // console.log('res.locals.error', res.locals.error);
    let state = store.getState()
    res.locals.state = state;
    next();
    // });

}