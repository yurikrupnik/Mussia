import {
    GET_QUIZZES,
    GOT_QUIZZES,
    GET_SELECTED_QUIZ,
    GOT_SELECTED_QUIZ,
    SET_SELECTED
} from './actions';

export default (state = { data: [], active: false, selected: {}}, action) => {
    switch (action.type) {
        case GET_QUIZZES:
            return Object.assign({}, state, { active: !state.active});
        case GOT_QUIZZES:
            return Object.assign({}, state, {
                active: !state.active,
                data: action.payload
            });
        case GET_SELECTED_QUIZ:
            return Object.assign({}, state, { active: !state.active });
        case GOT_SELECTED_QUIZ:
            return Object.assign({}, state, { active: !state.active, selected: action.payload});
        case SET_SELECTED:
            return Object.assign({}, state, { selected: action.payload});
        default:
            return state;
    }
};