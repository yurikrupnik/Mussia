import configureStore from '../../../../redux/store';
import {setCurrentUser, fetchUsers} from '../../../../api/users/actions';
import {setSession} from '../../../../redux/config/session/actions';

export default (req, res, next) => {
    let store = configureStore();
    if (req.isAuthenticated()) {
        // store.dispatch(setCurrentUser(req.user));
        store.dispatch(setSession(req.user.id));
        store.dispatch(fetchUsers()).then(() => {
            res.locals.state = store.getState();
            next();
        })

    } else {
        res.locals.state = store.getState();
        next();
    }
}

export {
    // configureStore
}