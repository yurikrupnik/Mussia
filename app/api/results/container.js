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
// import {mapToProps as userMapToProps, actions as userActions} from '../../../redux/user/selectors';

import {mapToProps as userMapToProps, actions as userActions} from '../../api/users/selectors';
import {mapToProps as quizzesMapToProps, actions as quizzesActions} from '../../api/quizzes/selectors';
import {mapToProps as resultsMapToProps, actions as resultsActions} from '../../api/results/selectors';

const style = {
    width: '90%',
    margin: '0 auto'

};

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedId: ''};
    }

    componentWillMount() {
        const {actions} = this.props;
        actions.getQuizzes()
            .then(res =>
                this.setState( // async - second param is callback
                    {
                        selectedId: res[0]._id
                    },
                    () => actions.getResults(res.map(val => val.answer_id))
                )
            );
    }

    handleClick() {
        const {actions} = this.props;
        actions.getQuizzes(['asd', 'sadsd']);
    }

    render() {
        let {results, quizzes} = this.props;
        const {selectedId} = this.state;
        const quizzesData = quizzes.data;
        const options = quizzesData.map(quiz => <MenuItem key={quiz._id} value={quiz._id} primaryText={quiz.label}/>);
        return (
            <div style={style}>
                <h5>Select Quiz</h5>
                <DropDownMenu onChange={this.handleChange.bind(this)} value={selectedId}>
                    {options}
                </DropDownMenu>
                <h4>Results</h4>
                <button onClick={this.handleClick.bind(this)}>Click me</button>
            </div>
        )
    }
}

const combinedMapTpProps = state => ({
    user: userMapToProps(state),
    quizzes: quizzesMapToProps(state),
    results: resultsMapToProps(state),
});

const combinedDispatchActions = dispatch => ({
    actions: bindActionCreators(Object.assign({}, userActions, quizzesActions, resultsActions), dispatch)
});

export default connect(combinedMapTpProps, combinedDispatchActions)(withRouter(Main));