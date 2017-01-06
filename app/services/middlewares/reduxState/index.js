import configureStore from '../../../redux/store/store';

export default (req, res, next) => {
    let store = configureStore();
    res.locals.state = store.getState();
    next()
}