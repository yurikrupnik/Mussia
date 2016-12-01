import path from 'path';
import {root} from '../../config/env';
export default (req, res) => {
    res.status(404).render('error');
};