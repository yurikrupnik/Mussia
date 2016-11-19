import path from 'path';
import config from '../../config/env';

let error = (req, res) => {
    // res.status(404).sendFile(path.join(config.root, 'views/404.html'));
    // res.sendFile(path.join(config.root, 'views/404.html'));
};

export {
    error,
};