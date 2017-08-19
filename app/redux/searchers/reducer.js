import {
    SERVICE_SEARCH,
    DISPATCH_SEARCH_FULFILLED,
    DISPATCH_SEARCH_BY_PAGE_FULFILLED,
} from './actions';


export default (state = { data: [], active: false }, action) => {
    switch (action.type) {
        case SERVICE_SEARCH:
            return Object.assign({}, state, { active: !state.active });
        case DISPATCH_SEARCH_FULFILLED:
            return Object.assign({}, state, { active: !state.active, data: action.payload });
        case DISPATCH_SEARCH_BY_PAGE_FULFILLED:
            return Object.assign({}, state, {
                    active: !state.active,
                    data: {
                        ...action.payload,
                        photo: state.data.photo.concat(action.payload.photo)
                    }
                }
            );
        default:
            return state;
    }
};