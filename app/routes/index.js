import React from 'react';
// import Root from '../Wrappers/Root/Root';
// import paymentsRoute from './payments';
// import counterRoute from './couter'
// import countersRoute from './counters';
// {/*let Pay = () => (<div>pay bitch</div>);*/}
// let Payments = () => (<div>Payments bitch</div>);

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);


export let routes = {
    path: '/',

    getComponents(state, cb) {
        // console.log('state in root route', state);
        // do asynchronous stuff to find the components
        cb(null, require('../Wrappers/Root/Root'))
    },
    getChildRoutes(location, cb) {
        require.ensure([], function() {
            cb(null, [
                require('./payments'),
                require('./counters'),
                require('./couter'),
                ]
            )
        });
    },
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('../Wrappers/Dashboard'),
            })
        })
    }
};