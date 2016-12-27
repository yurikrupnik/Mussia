import {compose} from 'redux';
const composeEnhancers = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default composeEnhancers();
    // applyMiddleware(thunk, promise, logger),
