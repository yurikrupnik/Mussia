// import Payments from '../Wrappers/Payments/Payments';
import React from 'react';
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

class Route {
    constructor(path) {
        this.path = path;
    }

    getComponents(state, cb) {
        const {pathname} = state.location;
        cb(null, require(`../api${pathname}/component`));
    }

    // getChildRoutes(location, cb) {
    //     // load the child route being pressed by the pathname
    //     require.ensure([], function() {
    //         let {pathname} = location.location;
    //         cb(null, require(`.${pathname}`)); // require route by path - './payments'
    //     });
    // }

    // getIndexRoute(partialNextState, callback) {
    //     require.ensure([], function () {
    //         callback(null, {
    //             // component: require('../Wrappers/Dashboard'),
    //         });
    //     });
    // }

}

export default new Route('/payments');

// export default {
//     path: 'payments',
//     getComponents(state, cb) {
//         const {pathname} = state.location;
//         cb(null, require(`../api${pathname}/component`));
//     },
//     getChildRoutes(location, cb) {
//         require.ensure([], function () {
//             cb(null, [
//                     require('./couter'),
                // ]
            // );
        // });
    // },
// }
