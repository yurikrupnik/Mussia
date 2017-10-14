import {
    SET_CURRENT_USER,
    FETCH_USERS_PENDING,
    FETCH_USERS_SUCCESS
} from './actions';

export default (state = { result: {}, entities: {}, currentUser: {}, active: false }, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return Object.assign({}, state, { currentUser: action.payload });

        case FETCH_USERS_PENDING:
            return Object.assign({}, state, { active: !state.active });
        case FETCH_USERS_SUCCESS:
            return Object.assign({}, state, {
                active: !state.active,
                result: action.payload.result,
                entities: action.payload.entities
            });
        default:
            return state;
    }
};


