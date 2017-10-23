// React component - responsible for init data fetch and
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash';
import {dispatchActions, mapToProps as quizzesMapToProps, actions as quizzesActions} from './selectors';
import {mapToProps as resultsMapToProps, actions as resultsActions} from '../../../api/results/selectors';

class Container extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {actions} = this.props;
        actions.read();
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
    results: resultsMapToProps(state)
});

const combinedDispatchActions = dispatch => ({
    actions: bindActionCreators(Object.assign({}, quizzesActions, resultsActions), dispatch)
});

export default connect(combinedMapTpProps, combinedDispatchActions)(Container);