import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import {applyMiddleware, compose} from 'redux';
import DevTools from '../DevTools';

const logger = createLogger();

export default compose(
    applyMiddleware(thunk, promise, logger),
);
