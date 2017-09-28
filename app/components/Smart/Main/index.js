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


const style = {
    width: '80%',
    margin: '0 auto'

};


const Shit = () => {
    return <div>hello</div>
};


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedId: ''};
    }

    componentWillMount() {
        const {user, history, actions} = this.props;
        actions.getQuizzes()
            .then(res => {
                actions.getResults(res);
                this.setState({selectedId: res[0]._id}); // set first to be selected at page mount
            });
    }


    handleChange(event, index, value) {
console.log('value', value);
        const {actions} = this.props;

        actions.getResults();
        this.setState({selectedId: value});
    }

    handleClick() {
        const {user, history, actions} = this.props;
        actions.getQuizzes();
    }

    render() {
        let {results, quizzes} = this.props;
        const {selectedId} = this.state;
        const quizzesData = quizzes.data;
        const options = quizzesData.map(quiz => <MenuItem key={quiz._id} value={quiz._id} primaryText={quiz.label} />);
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