export const SET_CURRENT = 'SET_CURRENT';
export const REMOVE_CURRENT = 'REMOVE_CURRENT';

// sync action
export const setCurrent = (payload) => ({type: SET_CURRENT, payload});
export const removeCurrent = () => ({type: REMOVE_CURRENT});
