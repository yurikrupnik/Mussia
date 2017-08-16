import React from 'react';
import state from './state';
import { StaticRouter as Router, matchPath } from 'react-router';

import { renderToString } from 'react-dom/server';
// import render from './render';
const render = (renderMe, state) => `<!DOCTYPE html>
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
            res.status(404).send(render(<div>Sorry, no match</div>));
        } else {
            console.log('res.locals.state', res.locals.state);

            res.status(200).send(render(
                (
                    <Router context={{}} location={req.url}>
                        <App initialState={res.locals.state}/>
                    </Router>
                ),
                res.locals.state
            ));
        }
    });
}