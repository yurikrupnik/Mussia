import React from 'react';
import Root from '../Wrappers/Root/Root';

let Pay = () => (<div>pay bitch</div>);
let Payments = () => (<div>Payments bitch</div>);

export let routes = {
    path: '/',
    component: Root,
    childRoutes: [
        {
            path: '/payments',
            component: Payments
        },
        {
            path: 'pay',
            component: Pay
        }
    ],
    // getChildRoutes(location, cb) {
    //     console.log('location', location);
    //     console.log('cb', cb);
    //     require.ensure([], (require) => {
    //         console.log('require', require);
    //
    //         // cb(null, [ require('./AboutRoute') ])
    //     })
    // },
    indexRoute: {
        component: Pay
    }
};