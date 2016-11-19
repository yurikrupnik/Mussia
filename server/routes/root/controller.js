import path from 'path';
import config from '../../config/env';

export default (req, res) => res.status(200).sendFile(path.join(config.root, 'views/index.html'));