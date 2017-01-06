import React from 'react';
import configureStore from '../redux/store/store';
import AppWrapper from '../Wrappers/App';
import {renderToString} from 'react-dom/server';
import {render} from 'react-dom';

// import state from '../services/middlewares/reduxState';
// import renderHTML from '../services/middlewares/render';
// import matchRouter from '../services/middlewares/matchRouter';
//
//
// let handleRoutesMiddlewares = [
//     matchRouter,
//     state,
//     renderHTML
// ];

let renderToDOM = (initialState = window.__PRELOADED_STATE__) => {
    render(<AppWrapper state={initialState}/>, document.getElementById('root'));
};


export {
    // handleRoutesMiddlewares,
    renderToDOM
}
