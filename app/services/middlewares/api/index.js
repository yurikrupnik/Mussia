import api from '../../../api'; // array api middleware
const preset = '/api';
let forbidden = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.status(403).send('fuck');
        next();
    }
};

export default (app) => {
    app.use(preset, forbidden, api); // load all api middlewares
}
