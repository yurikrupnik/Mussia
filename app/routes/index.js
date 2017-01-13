import React from 'react';
import Root from '../Wrappers/Root/Root';
import paymentsRoute from './payments';
import counterRoute from './couter'
import countersRoute from './counters';
let Pay = () => (<div>pay bitch</div>);
// let Payments = () => (<div>Payments bitch</div>);

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);


export let routes = {
    path: '/',

    component: Root,
    childRoutes: [
        paymentsRoute,
        counterRoute,
        countersRoute,
        // {
        //     path: 'pay',
        //     component: Pay
        // }
    ],
//     getComponents(state, cb) {
//
// // do asynchronous stuff to find the components
//         cb(null, require('../Wrappers/Root/Root'))
//     },
//     getChildRoutes(location, cb) {
//         require.ensure([], function() {
//             cb(null, [
//                 require('./payments'),
//                 require('./counters'),
//                 require('./couter'),
//                 // {path: 'pay', component: Pay}
//                 ]
//             )
//
//         });
//         // require.ensure([], (require) => {
//             // console.log('require', require);
//         // require('./routes/payments') ;
//             // cb(null, [ require('./routes/payments') ]);
//         // })
//     },
    // indexRoute: {
    //     component: Pay
    // }
};