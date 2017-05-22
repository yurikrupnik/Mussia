import React from 'react'
import {matchPath} from 'react-router';
import {renderToString} from 'react-dom/server';
import App from '../../../../components/Smart/App';
import { StaticRouter } from 'react-router-dom'
{/*let preRenderString = (props) => renderToString(<AppWrapper {...props}/>);*/}

export default (req, res, next) => {
    const context = {};
    const html = renderToString(
        <StaticRouter
            location={req.url}
            context={context}
        >
            <App/>
        </StaticRouter>
    );

    if (context.url) {
        res.writeHead(301, {
            Location: context.url
        });
        res.end();
            // can use the `context.status` that
            // we added in RedirectWithStatus
        // req.redirect(context.status, context.url);
    } else {
        res.locals.app = html;
        next();
    }
}