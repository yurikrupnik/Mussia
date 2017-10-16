import {combineReducers} from 'redux';
import isFetching from '../../redux/ui/isFetching/reducer';
import current from '../../redux/ui/current/reducer';

import {
    GET_QUIZZES,
    GOT_QUIZZES,
    GET_SELECTED_QUIZ,
    GOT_SELECTED_QUIZ,
    SET_SELECTED
} from './actions';

const data = (state = {data: [], selected: {}}, action) => {
    switch (action.type) {
        case GET_QUIZZES:
            return state;
        case GOT_QUIZZES:
            return Object.assign({}, state, {
                data: action.payload
            });
        case GET_SELECTED_QUIZ:
            return Object.assign({}, state, {active: !state.active});
        case GOT_SELECTED_QUIZ:
            return Object.assign({}, state, {selected: action.payload});
        case SET_SELECTED:
            return Object.assign({}, state, {selected: action.payload});
        default:
            return state;
    }
};

export default combineReducers({
    isFetching,
    current,
    data,
})