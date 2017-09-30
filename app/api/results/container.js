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
    }

    componentDidMount() {
        const {actions} = this.props;
        actions.getQuizzes()
            .then(res => actions.getResults(res[0].answers)
                    .then(() => actions.setSelectedQuiz(res[0])));
    }

    handleChange(event, index, value) {
        const {actions, quizzes} = this.props;
        const {data} = quizzes;
        const selected = data[index];
        const answers = selected.answers ? selected.answers : [];
        actions.getResults(answers).then(() => actions.setSelectedQuiz(selected));
    }

    handleClick() {
        const {history, quizzes} = this.props;
        const {selected} = quizzes;
        history.push('/' + selected._id, selected);
    }

    render() {
        const {results, quizzes} = this.props;
        const {selected} = quizzes;
        return (
            <div className="container">
                <Votes handleChange={this.handleChange.bind(this)}
                       handleClick={this.handleClick.bind(this)}
                        options={quizzes.data} votes={results.data} value={selected._id}
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