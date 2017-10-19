import {bindActionCreators} from 'redux';
import * as actions from './actions';

const mapToProps = (state, ownProps) => {
    console.log('ownProps', ownProps);
    console.log('state', state);
    return state.api.quizzes.data;
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