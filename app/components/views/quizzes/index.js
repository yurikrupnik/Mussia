import React, {Component, PureComponent, isValidElement} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import withContainer from '../../HOC/withContainer';
import routes from './routes';

import {Link, withRouter, Redirect} from 'react-router-dom';
import Spinner from '../../Spinner';
import {
    dispatchActions,
    mapToProps as quizzesMapToProps,
    actions as quizzesActions
} from './selectors';

class Quiz extends PureComponent {

    static propTypes = {
        quizzes: PropTypes.shape({
            loading: PropTypes.bool.isRequired,
            data: PropTypes.shape({
                entities: PropTypes.object.isRequired,
                result: PropTypes.array.isRequired
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
        const {actions, quizzes, location} = this.props;
        const {data} = quizzes;
        const {search} = location; // client url query
        actions.read({love: true});
    }

    handleSubmit(e) {
        e.preventDefault();
        // const {quizzes} = this.props;
        // const {form} = this.state;
        // const {selected} = quizzes;
        // console.log('this.props', this.props);
        this.props.actions.getSchema();
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

    // handleDeleteMulti() {
    //     const {quizzes, actions} = this.props;
    //     const {data} = quizzes;
    //     const {result} = data;
    //     actions.remove([result[0], result[1]]);
    // };

    render() {
        const {quizzes, location, actions, schema} = this.props;
        console.log('quizzes', quizzes);

        const {pathname} = location;
        const {loading, data} = quizzes;
        const {entities, result} = data;

        if (loading) {
            return <Spinner/>;
        }

        const Header = (
            <div>
                <h2>Quizzes</h2>
                <ul>
                    <li>
                        <Link to="/quizzes/create">
                            Create New
                        </Link>
                    </li>
                </ul>
                <RaisedButton label="Call somethng" onClick={this.handleSubmit.bind(this)}/>
                <RaisedButton label="Create" onClick={(e) => {
                    // actions.remove([result[0], result[1]]);
                    actions.create({
                        label: 'Yeebuu',
                        answers: [
                            {
                                label: 'Da'
                            },
                            {
                                label: 'OMG Da Da'
                            }
                        ]
                    });

                }}/>
                {result.map((id) => {
                    return <div key={id} className="row">
                        <div className="col-lg-10">{entities[id].label}</div>
                        <div className="col-lg-1">
                            <RaisedButton onClick={(e) => {

                                actions.remove(id);
                            }
                            } label={'Delete'} fullWidth={true} />
                        </div>
                        <div className="col-lg-1">
                            <RaisedButton onClick={e => {
                                let item = Object.assign({}, entities[result[0]]);
                                item.label = 'nirr';
                                actions.update(item);
                            }
                            } label={'Update first'} fullWidth={true} />
                        </div>
                    </div>
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
        read: quizzesActions.read,
        remove: quizzesActions.remove,
        create: quizzesActions.create,
        update: quizzesActions.update,
        getSchema: quizzesActions.getSchema
    }), dispatch)
});

export default withContainer(Quiz, combinedMapTpProps, combinedDispatchActions, routes);
