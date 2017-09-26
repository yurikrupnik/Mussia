// To Be Added - finish this component + all other inner components
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import {mapToProps as userMapToProps, actions as userActions} from '../../../redux/user/selectors';
import {mapToProps as quizzesMapToProps, actions as quizzesActions} from '../../../api/quizzes/selectors';
import {mapToProps as resultsMapToProps, actions as resultsActions} from '../../../api/results/selectors';

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {user, history, actions} = this.props;
        if (!user) {
            history.push('/register'); // push does the job but with error
        } else {
            actions.getResults();
        }
    }

    render() {
        let {results} = this.props;
        console.log('results', results);
        // todo create bigger db
        // todo create statistic from results
        return (
            <div>
                <h2>results</h2>
                {results.data.map((v, i) => {
                    console.log('v', v);

                    return <div key={i}>
                        quizId: {v.quiz_id}
                    </div>
                })}
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