import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router'
import {routes} from './rootRoute';


// request
import request from 'superagent';



import { fetchPayments, got} from '../redux/actions/payments';
// const dfetchPayments = () => {
//     return dispatch => {
//         // dispatch(ask());
//         return request.get('http://localhost:4000/payments')
//             .then(response => dispatch(got(response)));
//         // return Payment.getPayments()
//         //     .then(response => dispatch(got(response)))
//     }
// };

// import {show, count} from '../api/payments/payment.controller';

import Payments from '../api/payments/request';

import configureStore from '../redux/store/store'; // reuse wrapper
import {Provider} from 'react-redux'

// material
// import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import tabEvent from 'react-tap-event-plugin';
// import Router from '../../Router/Router';

const muiTheme = getMuiTheme({
    userAgent: 'all'
});


function renderHtml(props, response) {
    let store = configureStore();
    // here get the data we need to load the app via server side store creating
    // store.dispatch(fetchPayments()).then((data) => {

        // console.log('state 2' , state);

        let app = renderToString(
            <Provider store={store}>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <RouterContext {...props}/>
                </MuiThemeProvider>
            </Provider>
        );
        let state = store.getState();
        response.locals = {app, state};
        response.status(200);
        response.render('index');
    // });
}

let handleRoutes = (req, res) => {
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            // You can also check renderProps.components or renderProps.routes for
            // your "not found" component or route respectively, and send a 404 as
            // below, if you're using a catch-all route.
            // let app = renderToString(
            //     <RouterContext {...renderProps}/>
            // );
            // let title = 'my title';
            // res.locals = {app, title};
            // res.status(200);
            // res.render('index');
            renderHtml(renderProps, res);
        } else {
            res.status(404).send('Not found')
        }
    });
};

export default (app) => {
    app.get('*', handleRoutes);
}