import path from 'path';
import config from '../../config/env';

let index = (req, res) => {
    res.sendFile(path.join(config.root, 'views/index.html'));
};

export {
    index
};