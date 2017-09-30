import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash';
import {mapToProps as quizzesMapToProps, actions as quizzesActions} from '../../api/quizzes/selectors';

class Container extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {actions, quizzes, match} = this.props;
        const {selected} = quizzes;
        if (isEmpty(selected)) {
            actions.getQuizById(match.params.quiz_id);
        }
    }

    render() {
        const {children} = this.props;
        const childrenWithProps = React.Children.map(children,
            (child) => React.cloneElement(child, {
                ...this.props // pass all for all children - here can just pass selected
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
});

const combinedDispatchActions = dispatch => ({
    actions: bindActionCreators(Object.assign({}, quizzesActions), dispatch)
});

export default connect(combinedMapTpProps, combinedDispatchActions)(withRouter(Container));