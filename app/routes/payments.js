// import Payments from '../Wrappers/Payments/Payments';
import React from 'react';
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

let Pay = () => (<div>pay bitch</div>);
export default {
    path: 'payments',
    getComponents(state, cb) {

// do asynchronous stuff to find the components
        cb(null, require('../Wrappers/Payments/Payments'))
    },
    getChildRoutes(location, cb) {
        require.ensure([], function () {
            cb(null, [
                    // require('./payments').default,
                    // require('./counters').default,
                    // require('./couter').default,
                    {path: 'pay', component: Pay}
                ]
            )

        });
    },
}