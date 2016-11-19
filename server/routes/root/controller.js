import path from 'path';
import config from '../../config/env';

let root = (req, res) => {
    res.sendFile(path.join(config.root, 'views/index.html'));
};

let requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    console.log('Date.now()', Date.now());
    next()
};

let requestUrl = function (req, res, next) {
    console.log('req.url', req.url);
    next();
};

export {
    root,
    // error,
    requestTime,
    requestUrl
};