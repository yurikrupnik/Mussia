import path from 'path';
import {root} from '../../../config/env';

export default (app) => {
    app.set('view engine', 'ejs');
    app.set('views', path.join(root, 'views'));
}