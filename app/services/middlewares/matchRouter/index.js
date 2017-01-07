import React from 'react'
import {match} from 'react-router';
import {renderToString} from 'react-dom/server';

import {routes} from '../../../routes';
import AppWrapper from '../../../Wrappers/App';


let preRenderString = (props) => renderToString(<AppWrapper state={{}} {...props}/>);


export default (req, res, next) => {
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            res.locals.app = preRenderString(renderProps);
            next();
        } else {
            res.status(404).render('error');
        }
    });
}