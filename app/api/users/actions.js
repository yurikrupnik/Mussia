export const SET_CURRENT_USER_ID = 'SET_CURRENT_USER_ID';

export const REMOVE_SESSION_USER_ID = 'REMOVE_SESSION_USER_ID';

const setSessionUser = (id) => dispatch => {
    dispatch({ type: SET_CURRENT_USER_ID, payload: id})
};

const removeSessionUser = (user) => dispatch => {
    dispatch({ type: REMOVE_SESSION_USER_ID})
};

export {
    setSessionUser,
    removeSessionUser
    // getQuizzes,
    // getQuizById,
    // setSelectedQuiz
}
