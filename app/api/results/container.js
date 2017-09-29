import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {mapToProps as quizzesMapToProps, actions as quizzesActions} from '../../api/quizzes/selectors';
import {mapToProps as resultsMapToProps, actions as resultsActions} from '../../api/results/selectors';
import Votes from '../../components/Votes';

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''}; // can move to redux to handle the state updates - currently no need
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
        const {results, quizzes} = this.props;
        const {value} = this.state;
        return (
            <div className="container">
                <Votes handleChange={this.handleChange.bind(this)}
                        options={quizzes.data} votes={results.data} value={value}
                         />
            </div>
        )
    }
}

const combinedMapTpProps = state => ({
    quizzes: quizzesMapToProps(state),
    results: resultsMapToProps(state),
});

const combinedDispatchActions = dispatch => ({
    actions: bindActionCreators(Object.assign({}, quizzesActions, resultsActions), dispatch)
});

export default connect(combinedMapTpProps, combinedDispatchActions)(withRouter(Container));