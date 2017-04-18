
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

class Route {
    constructor(path) {
        this.path = path;
    }

    getComponents(state, cb) {
        cb(null, require('../Wrappers/Root/Root'));
    }

    getChildRoutes(location, cb) {
        // load the child route being pressed by the pathname
        require.ensure([], function() {
            let {pathname} = location.location;
            cb(null, require(`.${pathname}`)); // require route by path
        });
    }

    getIndexRoute(partialNextState, cb) {
        require.ensure([], function () {
            cb(null, {
                component: require('../Wrappers/Dashboard'),
            });
        });
    }

}


export let routes = new Route('/');
// export let routes = {
//     path: '/',
//
//     getComponents(state, cb) {
//         // console.log('state in root route', state);
//         // do asynchronous stuff to find the components
//         console.log('getComponents state: ', state);
//         cb(null, require('../Wrappers/Root/Root'));
//     },
//     getChildRoutes(location, cb) {
//         require.ensure([], function() {
//             let {pathname} = location.location;
//             cb(null, require(`.${pathname}`)); // require route by path
//         });
//     },
//     getIndexRoute(partialNextState, callback) {
//         console.log('partialNextState', partialNextState);
//
//         require.ensure([], function () {
//             callback(null, {
//                 component: require('../Wrappers/Dashboard'),
//             });
//         });
//     }
// };