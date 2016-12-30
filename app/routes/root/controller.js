import React from 'react'
import {renderToString} from 'react-dom/server';
import Wrapper from './../../redux/store/wrapper';
import {history} from '../../components/App/App';
import createMemoryHistory from 'history/lib/createMemoryHistory';

import {match, RouterContext, createRoutes} from 'react-router'
// import routes from './routes'


import App, {history} from '../../components/App/App';


export default (req, res) => {
    // let routes = createRoutes(history());
    let app = renderToString(
        <App />
    );

    // res.status(200);
    let title = 'my title';
    res.locals = {app, title};

    console.log('req.url', req.url);

    // Note that req.url here should be the full URL path from
    // the original request, including the query string.
    // match({routes, location: '/'}, (error, redirectLocation, renderProps) => {
    //     console.log('redirectLocation', redirectLocation);
    //     console.log('renderProps', renderProps);
    //
    //     if (error) {
    //         res.status(500).send(error.message)
    //     } else if (redirectLocation) {
    //         res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    //     } else if (renderProps) {
    //         // You can also check renderProps.components or renderProps.routes for
    //         // your "not found" component or route respectively, and send a 404 as
    //         // below, if you're using a catch-all route.
    //         res.status(200).render('index', renderToString(<Wrapper {...renderProps} />))
    //     } else {
    //         res.status(404).send('twvs');
    //         res.status(404).send('Not found')
    //     }
    // });
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
    res.locals = {app, title};
    res.status(200);
    res.render('index');
    // res.send(initialState);
    // res.render('index');

}