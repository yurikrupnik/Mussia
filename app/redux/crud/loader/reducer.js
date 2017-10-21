import {LOADING} from './actions';

const createLoadingWithNamedType = (name = '') => (state = false, action) => {
    switch (action.type) {
        case `${LOADING}_${name}`:
            return !state;
        default:
            return state;
    }
};

export default createLoadingWithNamedType;