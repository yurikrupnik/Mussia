
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);


export let routes = {
    path: '/',

    getComponents(state, cb) {
        // console.log('state in root route', state);
        // do asynchronous stuff to find the components
        cb(null, require('../Wrappers/Root/Root'));
    },
    getChildRoutes(location, cb) {
        require.ensure([], function() {
            cb(null, [
                require('./payments'),
                require('./counters'),
                require('./couter'),
                require('./register'),
                ]
            )
        });
    },
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function () {
            callback(null, {
                component: require('../Wrappers/Dashboard'),
            })
        })
    }
};