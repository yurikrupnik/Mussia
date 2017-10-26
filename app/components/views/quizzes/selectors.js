import {bindActionCreators} from 'redux';
import * as actions from './actions';
import {createSelectorByName} from '../../../redux/crud/selectors';
import {selector} from '../../../api/quizzes/config';
// let s= createSelectorByName(selector);
// console.log('s', s);

const mapToProps = createSelectorByName(selector);

// for redux connect, using actions as they are in other actions
const dispatchActions = (dispatch) => bindActionCreators(actions, dispatch);

export {
    mapToProps,
    dispatchActions,
    actions
}