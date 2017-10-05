import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';

import {isBoolean} from 'lodash';


const isDisabled = (form) => !form.every(v => isBoolean(v.value) ? true : v.value);

const handleErrorText = (field) => {
    return field.value === '' ? 'field is required': '';
};

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
        console.log('this.state.form', this.state.form);

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
        const answers = selected.answers && selected.answers.length &&
            selected.answers.map((answer, i) => <div key={i}>{answer.label}</div>);

        const inputs = form.map((item, index) => {
            if (item.type === 'checkbox') {
                return <Checkbox key={index} value={item.value} name={item.name}
                                 onCheck={this.handleChange.bind(this, index)}/>
            } else if (item.type === 'multi') {

                return <SelectField key={index} value={item.value} name={item.name} ref={item.name}
                                    onChange={this.handleSelectField.bind(this)}>
                    { item.enum.map((val, i) => {
                        return <MenuItem key={i} value={val.value} primaryText={val.label}/>
                    }) }
                </SelectField>

            } else {
                return <TextField key={index}
                                  value={item.value}
                                  type={item.type}
                                  onChange={this.handleChange.bind(this, index)}
                                  min={item.min}
                                  max={item.max}
                                  name={item.name}
                                  step={item.step}
                                  errorText={handleErrorText(item)} />
            }
        });

        return (
            <div>
                <div className="title">Label: {selected.label}</div>
                {answers}
                {inputs}

                <RaisedButton disabled={isDisabled(form)} label="Call somethng" onClick={this.handleSubmit.bind(this)}/>
            </div>
        )
    }
}

export default Quiz;