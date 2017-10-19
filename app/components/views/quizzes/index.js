import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { mapToProps as quizzesMapToProps, actions as quizzesActions } from './../../../api/quizzes/selectors';
import { mapToProps as resultsMapToProps, actions as resultsActions } from './../../../api/results/selectors';
import withLayout from '../../HOC/Layout';
import routes from './routes';

class Container extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        actions.read();
        // const { actions, quizzes, match } = this.props;
        // const { selected } = quizzes;
        // if (isEmpty(selected)) {
        // }
        // else {
        //     return <Redirect to='/register'/>;
        // }
    }

    render() {
        const { children } = this.props;
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
    // results: resultsMapToProps(state)
});

const combinedDispatchActions = dispatch => ({
    actions: bindActionCreators(Object.assign({}, quizzesActions), dispatch)
});

// passing routes to the view container which is made out of dumb components
export default withLayout(connect(combinedMapTpProps, combinedDispatchActions)(withRouter(Container)), routes);
