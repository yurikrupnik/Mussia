// To Be Added - finish this component + all other components
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import { mapToProps as userMapToProps, actions as userActions} from '../../../redux/user/selectors';
import { mapToProps as quizzesMapToProps, actions as quizzesActions} from '../../../api/quizzes/selectors';
import { mapToProps as votesMapToProps, actions as votesActions} from '../../../api/votes/selectors';
import { mapToProps as answersMapToProps, actions as answersActions} from '../../../api/answers/selectors';

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { user, history, actions } = this.props;
        if (!user) {
            history.push('/register'); // push does the job but with error
        } else {
            actions.getQuizzes();
        }
    }

    render() {
        let {quizzes} = this.props;
        console.log('quizzes', quizzes);

        return (
            <div>main view is for results - see in log the </div>
        )
    }
}

const combinedMapTpProps = state => ({
    user: userMapToProps(state),
    quizzes: quizzesMapToProps(state),
    votes: votesMapToProps(state),
    answers: answersMapToProps(state)
});

const combinedDispatchActions = dispatch => ({
    actions: bindActionCreators(Object.assign({}, userActions, quizzesActions, votesActions, answersActions), dispatch)
});

export default connect(combinedMapTpProps, combinedDispatchActions)(withRouter(Main));