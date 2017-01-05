import React from 'react';
import configureStore from '../redux/store/store';
import AppWrapper from '../Wrappers/App';
import {renderToString} from 'react-dom/server';
import {render} from 'react-dom';



import {routes} from './rootRoute';
import {match} from 'react-router'


let preRenderString = (props) => renderToString(<AppWrapper state={{}} {...props}/>);

// middlewares
let handleState = (req, res, next) => {
    let store = configureStore();
    res.locals.state = store.getState();
    next();
};


let renderServer = (req, res) => {
    res.status(200);
    res.render('index');
};


let matchRoutes = (req, res, next) => {
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            res.locals.app = preRenderString(renderProps);
            next();
        } else {
            res.status(404).render('error');
        }
    });
};

let handleRoutesMiddlewares = [
    matchRoutes,
    handleState,
    renderServer
];

let renderToDOM = (initialState = window.__PRELOADED_STATE__) => {
    render(<AppWrapper state={initialState} />, document.getElementById('root'));
};


export {
    handleRoutesMiddlewares,
    renderToDOM
}
