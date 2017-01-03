import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router'
import {routes} from './rootRoute';

import cors from 'cors';

// request
import request from 'superagent';



import { fetchPayments, got} from '../redux/actions/payments';
// const fetchPayments = () => {
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

function renderHtml(props, response) {
    // console.log('fetchPayments()', fetchPayments());

    // Payments.getPayments().then(function (data) {
    //     console.log('data', data);
    //
    // });

    let store = configureStore();
    // store.dispatch(fetchPayments()).then((data) => {

        let state = store.getState();
        console.log('state', state);

        let s = configureStore(state);
        console.log('s', s);

        // console.log(store.getState())
        let app = renderToString(
            <Provider store={s}>
                <RouterContext {...props}/>
            </Provider>
        );
        response.locals = {app, state};
        response.status(200);
        response.render('index');
    // });
    // let app = renderToString(
    //     <Provider store={store}>
    //         <RouterContext {...props}/>
    //     </Provider>
    // );
    // let state = store.getState();
    // response.locals = {app, state};
    // response.status(200);
    // response.render('index');

}

export default (req, res) => {
    // not working todo
    // cors({origin: 'http://localhost.com'});

    // cors({credentials: true, origin: 'http://localhost:4000'});

    // res.header("Access-Control-Allow-Origin", "http://localhost.com");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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
}