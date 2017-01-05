import React, {Component, PropTypes} from 'react';
import {renderToString} from 'react-dom/server';
import {routes} from './rootRoute';
import {match} from 'react-router'
import configureStore from '../redux/store/store'; // reuse wrapper
import AppWrapper from '../Wrappers/App';

function renderHtml(props, response) {
    let store = configureStore();
    let app = renderToString(
        <AppWrapper {...props}/>
    );
    let state = store.getState();
    response.locals = {app, state};
    response.status(200);
    response.render('index');
    // });
}

let handleRoutes = (req, res) => {
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            // You can also check renderProps.components or renderProps.routes for
            // your "not found" component or route respectively, and send a 404 as
            // below, if you're using a catch-all route.
            // let app = renderToString(
            //     <RouterContext {...renderProps}/>
            // );
            // let title = 'my title';
            // res.locals = {app, title};
            // res.status(200);
            // res.render('index');
            renderHtml(renderProps, res);
        } else {
            res.status(404).send('Not found')
        }
    });
};

export default (app) => {
    app.get('*', handleRoutes);
}