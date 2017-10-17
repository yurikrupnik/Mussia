const LOADING = 'LOADING';

const handler = (state, action) => !state;

const createIsFetchingReducer = (_actions = []) => {
    let actions = _actions.reduce((current, next)=> {
        current[next] = handler;
        return current;
    }, {});

    return (state = false, action) => {
        const {type} = action;
        if (actions.hasOwnProperty(type)) { // instead of switch- if false return state
            return actions[type](state, action);
        } else {
            return state;
        }
    }

};

export default createIsFetchingReducer;
// import {TOGGLE_IS_FETCHING} from './actions';
//
// export default (state = false, action) => {
//
//     switch (action.type) {
//         case TOGGLE_IS_FETCHING:
//             return !state;
//         default:
//             return state;
//     }
// };