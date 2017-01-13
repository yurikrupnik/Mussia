// import Counter from '../Wrappers/Counter';
// let Pay = () => {
//     return <d
// }
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

export default {
    path: 'example',
    getComponents(state, cb) {
        console.log('state in counter state', state);

        // do asynchronous stuff to find the components
        cb(null, require('../Wrappers/Example'))
    },
    getChildRoutes(location, cb) {
        // require.ensure([], function() {
        //     cb(null, [
        //             // require('../Wrappers/Example'),
        //             // require('./counters'),
        //             // require('./couter'),
        //             // require('./example')
        //         ]
        //     )
        // });
    },
    // component: Counter
}