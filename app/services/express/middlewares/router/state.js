import configureStore from '../../../../redux/store/store';
import {setSessionUser} from '../../../../api/users/actions';

// todo try async action pre data here or somewhere before route loads - important
export default (req, res, next) => {
    let store = configureStore();
    if (req.isAuthenticated()) {
        store.dispatch(setSessionUser(req.user))
    }
    res.locals.state = store.getState();
    next();
}

export {
    // configureStore
}