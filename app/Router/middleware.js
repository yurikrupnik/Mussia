import React, {Component, PropTypes} from 'react';
// import {routes} from './rootRoute';
// import {match} from 'react-router'
import {handleRoutesMiddlewares} from './render';

// let handleState = (req, res) => {
//     let store = configureStore();
//     res.locals.state = store.getState();
// };

// let renderServer = (req, res) => {
//     res.status(200);
//     res.render('index');
// };

// let renderHtml = (props, response) => {
//     let app = renderToString(
//         <AppWrapper state={{}} {...props}/>
//     );
//
//     let store = configureStore();
//     state = store.getState();
//     console.log('state', state);
//
//     response.locals = {app, state};
//     // response.status(200);
//     // response.render('index');
//     // renderServer();
// };
// let handleRoutes = (req, res, next) => {
//     match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
//         if (error) {
//             res.status(500).send(error.message);
//         } else if (redirectLocation) {
//             res.redirect(302, redirectLocation.pathname + redirectLocation.search)
//         } else if (renderProps) {
//             // You can also check renderProps.components or renderProps.routes for
//             // your "not found" component or route respectively, and send a 404 as
//             // below, if you're using a catch-all route.
//
//             res.locals.app = foundMath(renderProps);
//             // renderHtml(renderProps, res);
//             next();
//         } else {
//             res.status(404).render('error');
//         }
//     });
// };

export default (app) => {
    app.get('*', handleRoutesMiddlewares);
}