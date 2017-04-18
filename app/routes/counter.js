if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

export default {
    path: 'counter',
    getComponents(state, cb) {
        console.log('state in counter state', state);

        // do asynchronous stuff to find the components
        cb(null, require('../Wrappers/Counter'))
    },
    getChildRoutes(location, cb) {
        require.ensure([], function() {
            cb(null, [
                    {path: 'example', component: require('../Wrappers/Example')}
                ]
            )
        });
    },
    // component: Counter
}