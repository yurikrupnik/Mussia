import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import withRoutes from '../../HOC/withRoutes';
import routes from './routes';
import {connect} from 'react-redux';
// import Container from './container';
import List from './list';

import {
    dispatchActions,
    mapToProps as quizzesMapToProps,
    actions as quizzesActions
} from '../../../api/quizzes/selectors';
import {mapToProps as resultsMapToProps, actions as resultsActions} from '../../../api/results/selectors';
// import {mapToProps, dispatchActions} from '../../../api/quizzes/selectors';


class Quiz extends Component {
    constructor(props) {
        super(props);
        console.log('Quiz props', props);

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

    handleSubmit(e) {
        e.preventDefault();
        // const {quizzes} = this.props;
        // const {form} = this.state;
        // const {selected} = quizzes;
        console.log('this.props', this.props);
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
        const {quizzes} = this.props;
        // const {form} = this.state;
        // const {selected} = quizzes;

        return (
            <div>
                <h2>hello from quizzes</h2>
                <RaisedButton label="Call somethng" onClick={this.handleSubmit.bind(this)}/>
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
        );
    }
}

Container = connect(combinedMapTpProps, combinedDispatchActions)(Container);

// const WithRoutes = connect(mapToProps, dispatchActions)(Quiz);
// const WithRoutes = <Con>{Quiz}</Con>;
export default withRoutes(Container, routes);
// export default WithRoutes;