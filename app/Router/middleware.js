import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router'
import {routes} from './rootRoute';

import configureStore from '../redux/store/store'; // reuse wrapper
import { Provider } from 'react-redux'

function renderHtml(props, response) {
    let store = configureStore();
    {/*<Provider store={store}>*/}
    //// </Provider>
    let app = renderToString(
            <RouterContext {...props}/>
    );

    // const preloadedState = store.getState();
    // console.log('preloadedState', preloadedState);
    // '__PRELOADED_STATE__': preloadedState/
    response.locals = {app,};
    response.status(200);
    response.render('index');
}

export default (req, res) => {
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
}