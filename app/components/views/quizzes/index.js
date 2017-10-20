import React, {Component, isValidElement} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import withRoutes from '../../HOC/withSubRoutes';
import withContainer from '../../HOC/withContainer';
import routes from './routes';

// import Container from './container';
import {Link, withRouter, Redirect} from 'react-router-dom';
import Spinner from '../../Spinner';
import {
    dispatchActions,
    mapToProps as quizzesMapToProps,
    actions as quizzesActions
} from '../../../api/quizzes/selectors';
import {mapToProps as resultsMapToProps, actions as resultsActions} from '../../../api/results/selectors';
// import {mapToProps, dispatchActions} from '../../../api/quizzes/selectors';

import List from './list';

class Quiz extends Component {

    static propTypes = {
        quizzes: PropTypes.shape({
            loading: PropTypes.bool.isRequired,
            data: PropTypes.shape({
                entities: PropTypes.object.isRequired,
                result: PropTypes.array.isRequired,
                params: PropTypes.object.isRequired
            })
        }),
        actions: PropTypes.objectOf(PropTypes.func),
        history: PropTypes.object.isRequired,
        location: PropTypes.shape({
            pathname: PropTypes.string.isRequired
        }),
        match: PropTypes.object.isRequired,

    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            form: [
                {
                    value: 3,
                    min: 0,
                    max: 10,
                    step: 1,
                    type: 'number',
                    name: 'yuri1'
                },
                {
                    value: 'heelo',
                    min: 0,
                    max: 10,
                    // step: ,
                    type: 'string',
                    name: 'yuri2'
                },
                {
                    value: true,
                    // min: 0,
                    // max: 10,
                    // step: null,
                    type: 'checkbox',
                    name: 'yuri3'
                },
                {
                    value: 'Both',
                    name: 'mother',

                    type: 'multi',
                    enum: [
                        {label: 'LowBand', value: 'LowBand'},
                        {label: 'HighBand', value: 'HighBand'},
                        {label: 'Both', value: 'Both'}
                    ]
                }
            ]
        }
    }

    componentDidMount() {
        const {actions, quizzes} = this.props;
        const {loading, data} = quizzes;
        const {entities, result} = data;
        // if (!result.length) {
        actions.read({love: true});
        // }
    }

    handleSubmit(e) {
        e.preventDefault();
        // const {quizzes} = this.props;
        // const {form} = this.state;
        // const {selected} = quizzes;
        // console.log('this.props', this.props);
        this.props.actions.read();
        // this.props.actions.getAnswerId({quiz_id: selected._id, user_id: 'SJlcrw_Q3W'});
        // console.log('this.state.form', this.state.form);

    }

    handleChange(index, event) { // default params (event, value)
        const {target} = event;
        this.setState({
            form: this.state.form.map((field, i) => {
                if (i === index) {
                    field.value = field.type === 'checkbox' ? target.checked : target.value;
                }
                return field;
            })
        });
    }

    handleSelectField(event, index, value) { // default params (event, index, val) - index of menuitem inside select, not the index of the form
        this.setState({
            form: this.state.form.map((field) => {
                if (field.name in this.refs && this.refs[field.name].props.name) {
                    field.value = value;
                }
                return field;
            })
        });
    }

    render() {
        const {quizzes, location} = this.props;
        const {pathname} = location;
        const {loading, data} = quizzes;
        const {entities, result} = data;
        console.log('this.props', this.props);

        if (loading) {
            return <Spinner/>;
        }

        const Header = (
            <div>
                <h2>hello from quizzes</h2>
                <ul>
                    <li>
                        <Link to="/quizzes/create">
                            Create Quiz
                        </Link>
                    </li>
                </ul>
                <RaisedButton label="Call somethng" onClick={this.handleSubmit.bind(this)}/>
                {result.map((id) => {
                    return <div key={id}>{entities[id].label}</div>
                })}
            </div>
        );

        return (
            <div>
                {pathname.indexOf('/', 1) > -1 ? null : Header}
                {this.props.children}
            </div>
        )
    }
}


const combinedMapTpProps = state => ({
    quizzes: quizzesMapToProps(state),
});

const combinedDispatchActions = dispatch => ({
    actions: bindActionCreators(Object.assign({}, {
        read: quizzesActions.read
    }), dispatch)
});

export default withContainer(Quiz, combinedMapTpProps, combinedDispatchActions, routes);
