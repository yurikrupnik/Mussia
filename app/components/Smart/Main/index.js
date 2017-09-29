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


import Votes from '../../Votes/index';
import Quiz from '../../Quiz/index';


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
        this.state = {value: ''}; // can move to redux to handle the state updates - currently no need
        // can call it also selected_quiz
    }

    componentDidMount() {
        const {actions, location} = this.props;
        // debugger;
        // const answer_id = location.pathname || '';
        const answer_id = location.pathname.length > 1 && location.pathname.replace('/:', '') || null;
        // console.log('answer_id', answer_id);
        //
        // if (!answer_id) {
        //     actions.getQuizzes()
        //         .then(res => {
        //             actions.getResults(res[0].answers);
        //             this.setState({value: res[0]._id});
        //         });
        // } else {
            actions.getQuizById(answer_id).then(function (res) {
                console.log('res', res);

            })
        // }
    }


    handleChange(event, index, value) {
        const {actions, quizzes} = this.props;
        const {data} = quizzes;
        const selected = data[index].answers ? data[index].answers : [];
        actions.getResults(selected);
        this.setState({value});
    }

    handleClick() {
        const {actions} = this.props;
        actions.getQuizzes();
    }

    render() {
        const {results, quizzes, location} = this.props;
        // const {actions, location} = this.props;
        const pathname = location.pathname.length > 1
            && location.pathname.replace('/:', '') || '';

        // console.log('pathname', pathname);

        const {value} = this.state;
        const options = quizzes
            .data.map((val, i) => <MenuItem key={i} value={val._id} primaryText={val.label}/>);

        const votes = results.data.map((val, index) => {
            return (
                <div className="row" key={index}>
                    <div className="col-xs-6">{val.label}</div>
                    <div className="col-xs-6">{val.count}</div>
                </div>
            )
        });

console.log('quizzes.selected', quizzes.selected);

        const elem = (pathname) => {
            if (pathname.length) { // always contains '/'
                // const currentQuiz = quizzes.data.find(v => v._id === value);
                // </div>
                // })}
                return <Quiz data={quizzes.selected} />
                //     {currentQuiz.answers.map(answer => <div>{answer}</div>)}

            } else {
                return <Votes handleChange={this.handleChange.bind(this)}
                              options={options} votes={votes} value={value}
                />
                // return (
                //     <div>
                //         <h5>Select Quiz</h5>
                //         <DropDownMenu style={{display: 'block'}}
                //                       onChange={this.handleChange.bind(this)}
                //                       value={value}
                //         >
                //             {options}
                //         </DropDownMenu>
                //         <h4>Results</h4>
                //         {votes}
                //     </div>
                // )
            }
        };

        return (
            <div style={style}>
                {votes}
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