import {bindActionCreators} from 'redux';
import * as actions from './actions';

const mapToProps = (state, ownProps) => {
    return state.api.quizzes;
};

const dispatchActions = (dispatch) => {
    return bindActionCreators(actions, dispatch);
    //  return {
    //      getLol: (dispatch) => actions.get,
    //  }
};

export {
    mapToProps,
    dispatchActions,
    actions
}