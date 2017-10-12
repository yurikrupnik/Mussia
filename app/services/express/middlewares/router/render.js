import {renderToString} from 'react-dom/server';
import {StaticRouter, matchPath} from 'react-router';
import React from 'react';
import App from '../../../../components/App'
import routes from '../../../../routes';

const render = (component, state) => `<!DOCTYPE html>
<html lang="en">
    <head>
        <base href="/" />
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
    // console.log('req.url', req.url);

    // const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);

    // if (!match) {
    //     res.status(404).send(render(<div>Sorry, no match</div>));
    // } else {
    const context = {};
    if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        res.redirect(301, context.url)
    } else {
        // we're good, send the response
        // console.log('context', context);

        res.status(200).send(render(
            (
                <StaticRouter
                    location={req.url}
                    context={context}
                >
                    <App/>
                </StaticRouter>
            ),
            res.locals.state
        ));
    }
    // }
}