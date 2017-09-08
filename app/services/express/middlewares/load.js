import logger from './logger';
import setters from './setters';
import webpack from './webpack';
import serveStatics from './serveStatics';
import bodyParser from './bodyParser';
import passport from './passport';
import api from './api';
import router from './router';
import errors from './errors';

export default (app) => {
    logger(app);
    setters(app);
    webpack(app);
    serveStatics(app);
    bodyParser(app);
    passport(app);
    api(app);
    router(app);
    errors(app);
}