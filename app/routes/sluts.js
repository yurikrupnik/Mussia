
// import Payments from '../Wrappers/Payments/Payments';
import React from 'react';
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

// let Pay = () => (<div>pay bitch</div>);
export default {
    path: 'sluts',
    getComponents(state, cb) {
        cb(null, require('../Wrappers/Sluts'))
    },
    getChildRoutes(location, cb) {
        require.ensure([], function () {
            cb(null, [
                    require('./couter'),
                ]
            )

        });
    },
}
