import path from 'path';
import {root} from '../../config/env';

export default (req, res) => res.status(200).sendFile(path.join(root, 'views/index.html'));