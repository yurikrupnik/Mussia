import apiMiddleware from '../../../../api'; // array api middleware
import forbidden from './forbidden';
import {apiPrefix} from '../../../../config/env';
export default (app) => {
    app.use(apiPrefix, apiMiddleware);
}
