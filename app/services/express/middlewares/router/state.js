import configureStore from '../../../../redux/store/store';
import {setCurrentUser, fetchUsers} from '../../../../api/users/actions';

// todo try async action pre data here or somewhere before route loads - important
export default (req, res, next) => {
    let store = configureStore();
    if (req.isAuthenticated()) {
        store.dispatch(setCurrentUser(req.user));
        // store.dispatch(fetchUsers()).then(() => {
            res.locals.state = store.getState();
            next();
        // })

    } else {
        res.locals.state = store.getState();
        next();
    }
}

export {
    // configureStore
}