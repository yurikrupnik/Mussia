import {compose} from 'redux';

const composeEnhancers = global.window && global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default composeEnhancers();
    // applyMiddleware(thunk, promise, logger),
