import apiMiddlewares from '../../../api'; // array api middleware
const API_PRESET = '/api';
let forbidden = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.status(403).send('fuck');
    }
};

export default (app) => {
    app.use(API_PRESET, forbidden, apiMiddlewares); // load all api middlewares
}
