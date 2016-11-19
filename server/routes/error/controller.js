import path from 'path';
import config from '../../config/env';
export default (req, res) => {
    res.status(404).sendFile(path.join(config.root, 'views/404.html'));
};