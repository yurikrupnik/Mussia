import React from 'react';
import state from './state';
import render from './render';
import matchRouter from './matchRouter';
import { StaticRouter as Router, matchPath } from 'react-router';

import { renderToString } from 'react-dom/server';
const serverRender = (renderMe, state) => `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Universal React Router 4 Demo</title>
    </head>
    <body>
        <div id="app">${renderToString(renderMe)}</div>
        <script>window.__PRELOADED_STATE__ = ${JSON.stringify(state)};</script>
        <script src="main.js"></script>
    </body>
</html>`;

import App from '../../../../components/Smart/App'
import routes from '../../../../components/Smart/App/routes';

export default (app) => {
    app.get('*', state, (req, res) => {
        const match = routes.reduce((acc, route) => {
            return matchPath(req.url, route, { exact: true }) || acc;
        }, null);

        if (!match) {
            res.status(404).send(serverRender(<div>Sorry, no match</div>));
        } else {
            res.status(200).send(serverRender(
                (
                    <Router context={{}} location={req.url}>
                        <App />
                    </Router>
                ),
                res.locals.state
            ));
        }
    });
}