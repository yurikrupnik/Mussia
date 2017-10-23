
function createSelectorByName(name) {
    return function (state, ownProps) {
        return state.api[name]
    }
}

export {
    createSelectorByName,
    // dispatchActions,
    // actions
}