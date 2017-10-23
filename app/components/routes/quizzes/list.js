import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

class Quiz extends Component {
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

    handleSubmit(e) {
        e.preventDefault();
        const {quizzes} = this.props;
        const {form} = this.state;
        const {selected} = quizzes;
        this.props.actions.getAnswerId({quiz_id: selected._id, user_id: 'SJlcrw_Q3W'});
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
        const {form} = this.state;
        const {selected} = quizzes;

        return (
            <div>
                <div className="title">Label: {selected.label}</div>
                <RadioButtonGroup name="answer_id">
                    {selected.answers && selected.answers.length &&
                    selected.answers.map((answer, i) => <RadioButton key={i}
                                                                     value={answer._id}
                                                                     label={answer.label}
                    />)}
                </RadioButtonGroup>

                <RaisedButton label="Call somethng" onClick={this.handleSubmit.bind(this)}/>
            </div>
        )
    }
}

export default Quiz;