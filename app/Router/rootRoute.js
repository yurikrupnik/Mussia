import React from 'react';
import Root from '../Wrappers/Root/Root';
import paymentsRoute from './routes/payments';
import counterRoute from './routes/couter';
let Pay = () => (<div>pay bitch</div>);
// let Payments = () => (<div>Payments bitch</div>);

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)


export let routes = {
    path: '/',

    component: Root,
    childRoutes: [
        paymentsRoute,
        counterRoute,
        {
            path: 'pay',
            component: Pay
        }
    ],
//     getComponents(state, cb) {
// // do asynchronous stuff to find the components
//         cb(null, Root)
//     },
    // getChildRoutes(location, cb) {
    //     console.log('location', location);
    //     console.log('cb', cb);
    //     require.ensure([], function() {
    //         // let contacts = require('./routes/payments');
    //         // console.log('contacts', contacts);
    //
    //         cb(null, [paymentsRoute, {path: 'pay', component: Pay}])
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