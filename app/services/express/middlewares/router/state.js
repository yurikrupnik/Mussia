import configureStore from '../../../../redux/store/store';
// import store from '../../../../redux/store';
import {fountUser} from '../../../../api/users/actions';
export default (req, res, next) => {
    let store = configureStore();
    console.log('req.user', req.user);
    console.log('req.session', req.session);
    if (req.isAuthenticated()) { // todo client it


        // store.dispatch(fountUser(req.user))
    }
    res.locals.state = store.getState();
    next();
}

export {
    // configureStore
}