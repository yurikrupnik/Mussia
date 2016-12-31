import React from 'react'
import {renderToString} from 'react-dom/server';
// import Wrapper from './../../redux/store/wrapper';
// import createMemoryHistory from 'history/lib/createMemoryHistory';

import {match, RouterContext} from 'react-router'
// import routes from './routes'


import {routes} from '../../components/App/App';


export default (req, res) => {
    // Note that req.url here should be the full URL path from
    // the original request, including the query string.

    console.log('req.url', req.url);


    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            // You can also check renderProps.components or renderProps.routes for
            // your "not found" component or route respectively, and send a 404 as
            // below, if you're using a catch-all route.
            let app = renderToString(
                <RouterContext {...renderProps}/>
            );
            let title = 'my title';
            res.locals = {app, title};
            res.status(200);
            res.render('index');
        } else {
            res.status(404).send('Not found')
        }
    });
    //
    // fetchCounter(apiResult => {
    //     // Read the counter from the request, if provided
    //     // const params = qs.parse(req.query);
    //     const counter =  apiResult || 0; // parseInt(params.counter, 10) ||
    //
    //     // Compile an initial state
    //     let preloadedState = { counter };
    //
    //     // Create a new Redux store instance
    //     // const store = createStore(counterApp, preloadedState);
    //
    //     // Render the component to a string
    //     // const html = renderToString(
    //     //     <Provider store={store}>
    //     //         <App />
    //     //     </Provider>
    //     // )
    //
    //     // Grab the initial state from our Redux store
    //     const finalState = store.getState();
    //
    //     // Send the rendered page back to the client
    // });
    // res.locals = {app, title};
    // res.status(200);
    // res.render('index');
    // res.send(initialState);
    // res.render('index');

}