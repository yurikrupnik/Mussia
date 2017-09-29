import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {mapToProps as quizzesMapToProps, actions as quizzesActions} from '../../api/quizzes/selectors';
import Quiz from '../../components/Quiz';

const style = {
    width: '80%',
    margin: '0 auto'
};

class Container extends Component {

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
                <Quiz data={quizzes.selected} />
            </div>
        )
    }
}

const combinedMapTpProps = state => ({
    quizzes: quizzesMapToProps(state),
});

const combinedDispatchActions = dispatch => ({
    actions: bindActionCreators(Object.assign({}, quizzesActions), dispatch)
});

export default connect(combinedMapTpProps, combinedDispatchActions)(withRouter(Container));