// To Be Added - finish this component + all other inner components
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import {mapToProps as userMapToProps, actions as userActions} from '../../../api/users/selectors';
import {mapToProps as quizzesMapToProps, actions as quizzesActions} from '../../../api/quizzes/selectors';
import {mapToProps as resultsMapToProps, actions as resultsActions} from '../../../api/results/selectors';


// import Votes from '../../Votes/index';
import Quiz from '../../Quiz/index';


const style = {
    width: '80%',
    margin: '0 auto'
};


class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {actions, location} = this.props;
        const answer_id = location.pathname.length > 1 && location.pathname.replace('/', '') || null;
        actions.getQuizById(answer_id);
    }

    render() {
        const {quizzes} = this.props;
        return (
            <div style={style}>
                <Quiz data={quizzes.selected || {}} />
            </div>
        )
    }
}

const combinedMapTpProps = state => ({
    // user: userMapToProps(state),
    quizzes: quizzesMapToProps(state),
    // results: resultsMapToProps(state),
});

const combinedDispatchActions = dispatch => ({
    actions: bindActionCreators(Object.assign({}, quizzesActions), dispatch)
});

export default connect(combinedMapTpProps, combinedDispatchActions)(withRouter(Main));