import configureStore from '../../../../redux/store/store';
// config redux store and save in locals - template will use it to render initialized app with server side state

import {fountUser} from '../../../../redux/actions/user';
import {fetchPayments} from '../../../../redux/actions/payments';

export default (req, res, next) => {
    let store = configureStore();
    if (req.isAuthenticated()) {
        store.dispatch(fountUser(req.user));
    }
    // store.dispatch(fetchPayments()).then(() => {
        res.locals.state = store.getState();
        next();
    // });

}