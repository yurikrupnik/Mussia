import configureStore from '../../../../redux/store/store';
// import { getComments } from '../../../../redux/comments/actions'; // can play with actions for pre load state
// config redux store and save in locals - template will use it to render initialized app with server side state

export default (req, res, next) => {
    let store = configureStore();
    res.locals.state = store.getState();
    next();
}