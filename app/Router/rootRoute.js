import React from 'react';
import Root from '../Wrappers/Root/Root';
import paymentsRoute from './routes/payments'
let Pay = () => (<div>pay bitch</div>);
// let Payments = () => (<div>Payments bitch</div>);

if (typeof require.ensure !== 'function') require.ensure = (d,c) => c(require)


export let routes = {
    path: '/',
    // getComponents(nextState, callback) {
    //     console.log('nextState', nextState);
    //     console.log('callback', callback);
    //
    // },
    component: Root,
    childRoutes: [
        paymentsRoute,
        {
            path: 'pay',
            component: Pay
        }
    ],
    // getChildRoutes(location, cb) {
    //     console.log('location', location);
    //     console.log('cb', cb);
    //     require.ensure([], function() {
    //         // let contacts = require('./routes/payments');
    //         // console.log('contacts', contacts);
    //
    //         cb(null, [paymentsRoute])
    //
    //     });
    //     // require.ensure([], (require) => {
    //         // console.log('require', require);
    //     // require('./routes/payments') ;
    //         // cb(null, [ require('./routes/payments') ]);
    //     // })
    // },
    // indexRoute: {
    //     component: Pay
    // }
};