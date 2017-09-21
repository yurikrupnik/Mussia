import {
    GET_QUIZZES,
    GOT_QUIZZES,
    GET_QUIZ,
    GOT_QUIZ
} from './actions';

// To Be Added - finish reducer

export default (state = { data: [], active: false }, action) => {
    switch (action.type) {
        case GET_QUIZZES:
            return Object.assign({}, state, { active: !state.active });
        case GOT_QUIZZES:
            return Object.assign({}, state, {
                active: !state.active,
                data: action.payload
            });
        default:
            return state;
    }
};