import configureStore from '../../../redux/store/store';
// config redux store and save in locals - template will use it to render initialized app with server side state

import {fountUser} from '../../../redux/actions/user';
import {fetchPayments} from '../../../redux/actions/payments';

// todo ask for async data request - remember to rewrite payments
export default (req, res, next) => {
    let store = configureStore();
    // store.dispatch(fetchPayments())
    if (req.isAuthenticated()) {
        // let store = configureStore();
        store.dispatch(fountUser(req.user));
    }
    // store.dispatch(fountUser(req.user));
    res.locals.state = store.getState();
    next();
}