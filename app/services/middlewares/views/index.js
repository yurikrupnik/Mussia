import path from 'path';
import {root} from '../../../config/env';

export default (app) => { // set view engine, look for render middleware
    app.set('view engine', 'ejs');
    app.set('views', path.join(root, 'views'));
}