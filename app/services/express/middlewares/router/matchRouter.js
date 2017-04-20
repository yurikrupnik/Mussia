import React from 'react'
import {match} from 'react-router';
import {routes} from '../../../../routes';

import {renderToString} from 'react-dom/server';
import AppWrapper from '../../../../Wrappers/App';

let preRenderString = (props) => renderToString(<AppWrapper {...props}/>);

export default (req, res, next) => {
    console.log('match', match);

    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            res.locals.app = preRenderString(renderProps);
            next();
        } else {
            res.redirect('/');
        }
    });
}