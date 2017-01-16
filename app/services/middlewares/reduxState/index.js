import configureStore from '../../../redux/store/store';
// config redux store and save in locals - template will use it to render initialized app with server side state
import {fountUser} from '../../../redux/actions/user';


export default (req, res, next) => {
    let store = configureStore();
    if (req.isAuthenticated()) {
        // console.log('req.isAuthenticated()', req.isAuthenticated());
        //
        // next();
        // store = configureStore({user: req.user});
        store.dispatch(fountUser(req.user));

    }

    res.locals.state = store.getState();
    next();
}