import apiMiddlewares from '../../../../api'; // array api middleware
import forbidden from './forbidden';
const preset = '/api';

export default (app) => {
    app.use(preset, forbidden, apiMiddlewares);
}
