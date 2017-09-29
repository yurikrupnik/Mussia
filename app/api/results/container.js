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

import Votes from '../../components/Votes';
// import Quiz from '../../Quiz/index';


// const style = {
//     width: '80%',
//     margin: '0 auto'
// };


const Shit = () => {
    return <div>hello</div>
};


class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''}; // can move to redux to handle the state updates - currently no need
        // can call it also selected_quiz
    }

    componentDidMount() {
        const {actions} = this.props;
        actions.getQuizzes()
            .then(res => {
                actions.getResults(res[0].answers);
                this.setState({value: res[0]._id});
            });
    }


    handleChange(event, index, value) {
        const {actions, quizzes} = this.props;
        const {data} = quizzes;
        const selected = data[index].answers ? data[index].answers : [];
        actions.getResults(selected);
        this.setState({value});
    }

    render() {
        const {results, quizzes, location} = this.props;

        const {value} = this.state;
        const {selected, data} = quizzes;
        // console.log('quizzes', quizzes);

        const options = data.map((val, i) => <MenuItem key={i} value={val._id} primaryText={val.label}/>);

        const votes = results.data.map((val, index) => {
            return (
                <div className="row" key={index}>
                    <div className="col-xs-6">{val.label}</div>
                    <div className="col-xs-6">{val.count}</div>
                </div>
            )
        });

        return (
            <div style={style}>
                <Votes handleChange={this.handleChange.bind(this)}
                        options={options} votes={votes} value={value}
                         />
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

export default connect(combinedMapTpProps, combinedDispatchActions)(withRouter(Results));