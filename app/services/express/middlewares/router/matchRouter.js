import React from 'react'
// import {matchPath} from 'react-router';
// import {routes} from '../../../../routes';

import {renderToString} from 'react-dom/server';
import AppWrapper from '../../../../Wrappers/App';
import { StaticRouter } from 'react-router'
{/*let preRenderString = (props) => renderToString(<AppWrapper {...props}/>);*/}

export default (req, res, next) => {
    const context = {};


    const html = renderToString(
        <StaticRouter
            location={req.url}
            context={context}
        >
            <AppWrapper/>
        </StaticRouter>
    );

    if (context.url) {
        res.writeHead(301, {
            Location: context.url
        });
        res.end()
    } else {
        res.locals.app = html;
        next();
    }
    // console.log('match', matchPath);

    // matchPath(req.url, (error, redirectLocation, renderProps) => {
    //     if (error) {
    //         res.status(500).send(error.message);
    //     } else if (redirectLocation) {
    //         res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    //     } else if (renderProps) {
    //         res.locals.app = preRenderString(renderProps);
    //         next();
    //     } else {
    //         res.redirect('/');
    //     }
    // });
}