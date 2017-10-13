import React from 'react';
import {StaticRouter, matchPath} from 'react-router';
import App from '../../../../components/views/App'

import html from './html';

export default (req, res) => {
    const context = {};
    if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        res.redirect(301, context.url)
    } else {
        // we're good, send the response
        res.status(200).send(html(
            (
                <StaticRouter
                    location={req.url}
                    context={context}
                >
                    <App initialState={{}} userAgent={req.headers['user-agent']} />
                </StaticRouter>
            ),
            res.locals.state
        ));
    }
}
