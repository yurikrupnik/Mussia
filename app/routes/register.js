if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

export default {
    path: 'register',
    getComponents(state, cb) {
        cb(null, require('../Wrappers/Register'))
    }
}