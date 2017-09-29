import {
    GET_QUIZZES,
    GOT_QUIZZES,
    SET_SELECTED_QUIZ,
    GET_SELECTED_QUIZ
} from './actions';

// To Be Added - finish reducer

export default (state = { data: [], active: false, selected: {} }, action) => {
    switch (action.type) {
        case GET_QUIZZES:
            return Object.assign({}, state, { active: !state.active});
        case GOT_QUIZZES:
            debugger
            return Object.assign({}, state, {
                active: !state.active,
                data: action.payload,
                selected: action.payload[0]
            });
        case SET_SELECTED_QUIZ:
            debugger
            return Object.assign({}, state, { active: !state.active, selected: action.payload });
        case GET_SELECTED_QUIZ:
            debugger
            return Object.assign({}, state, {
                active: !state.active,
                selected: action.payload
            });
        default:
            return state;
    }
};