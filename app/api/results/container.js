import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {mapToProps as quizzesMapToProps, actions as quizzesActions} from '../../api/quizzes/selectors';
import {mapToProps as resultsMapToProps, actions as resultsActions} from '../../api/results/selectors';
import {mapToProps as usersMapToProps, actions as usersActions} from '../../api/users/selectors';

class Container extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const {actions} = this.props;
        actions.fetchUsers().then(function (res) {
            console.log('res', res);

            actions.getQuizzes()
                .then(res => actions.getCount(res[0].answers)
                    .then(() => actions.setSelectedQuiz(res[0])));
        });
    }

    handleChange(event, index, value) {
        const {actions, quizzes} = this.props;
        const {data} = quizzes;
        const selected = data[index];
        const answers = selected.answers ? selected.answers : [];
        actions.getCount(answers).then(() => actions.setSelectedQuiz(selected));
    }

    handleClick() {
        const {history, quizzes} = this.props;
        const {selected} = quizzes;
        history.push('/quiz/' + selected._id, selected);
    }

    render() {
        const {children} = this.props;
        const childrenWithProps = React.Children.map(children,
            (child) => React.cloneElement(child, {
                ...this.props,
                handleChange: this.handleChange,
                handleClick: this.handleClick,
            })
        );
        return (
            <div className="container">
                {childrenWithProps}
            </div>
        )
    }
}

const combinedMapTpProps = state => ({
    quizzes: quizzesMapToProps(state),
    results: resultsMapToProps(state),
    users: usersMapToProps(state)
});

const combinedDispatchActions = dispatch => ({
    actions: bindActionCreators(Object.assign({}, quizzesActions, resultsActions, usersActions), dispatch)
});

export default connect(combinedMapTpProps, combinedDispatchActions)(withRouter(Container));