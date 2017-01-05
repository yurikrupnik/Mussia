import React, {Component, PropTypes} from 'react';
import {routes} from './rootRoute';
import {match} from 'react-router'
import {renderHtml} from './render';


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
            renderHtml(renderProps, res);
        } else {
            res.status(404).send('Not found')
        }
    });
};

export default (app) => {
    app.get('*', handleRoutes);
}