import configureStore from '../../../../redux/store/store';
import {fountUser} from '../../../../redux/user/actions';
// config redux store and save in locals - template will use it to render initialized app with server side state


export default (req, res, next) => {
    let store = configureStore();
    if (req.isAuthenticated()) { // todo client it
        store.dispatch(fountUser(req.user))
    }
    res.locals.state = store.getState();
    next();
}