import {bindActionCreators} from 'redux';
import * as actions from './actions';

const mapToProps = (state, ownProps) => {
    return state.quizzes;
};

const dispatchActions = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export {
    mapToProps,
    dispatchActions,
    actions
}