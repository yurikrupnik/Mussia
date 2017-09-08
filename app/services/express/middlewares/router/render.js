import { renderToString } from 'react-dom/server';
import { StaticRouter as Router, matchPath } from 'react-router';
import React from 'react';
import App from '../../../../components/Containers/App'
import routes from '../../../../components/Containers/App/routes';

const render = (component, state) => `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Engine</title>
        <link rel="stylesheet" href="main.css">
    </head>
    <body>
        <div id="root">${renderToString(component)}</div>
        <script>window.__PRELOADED_STATE__ = ${JSON.stringify(state)};</script>
        <script src="main.js"></script>
    </body>
</html>`;

export default (req, res) => {
    const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);

    if (!match) {
        res.status(404).send(render(<div>Sorry, no match</div>));
    } else {
        res.status(200).send(render(
            (
                <Router context={{}} location={req.url}>
                    <App />
                </Router>
            ),
            res.locals.state
        ));
    }
}