import React from 'react'
import {Field, reduxForm} from 'redux-form'

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const required = value => (value ? undefined : 'Required');
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const number = value =>
    value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;
const minValue18 = minValue(18);
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;
const tooOld = value =>
    value && value > 65 ? 'You might be too old for this' : undefined;
const aol = value =>
    value && /.+@aol\.com/.test(value)
        ? 'Really? You still use AOL for your email?'
        : undefined;

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            <TextField {...input} placeholder={label} type={type}/>
            {touched &&
            ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const FieldLevelValidationForm = props => {
    console.log('props', props);

    const {handleSubmit, pristine, reset, submitting} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="username"
                type="text"
                component={renderField}
                label="Username"
                validate={[required, maxLength15]}
            />
            <Field
                name="email"
                type="email"
                component={renderField}
                label="Email"
                validate={email}
                warn={aol}
            />
            <Field
                name="age"
                type="number"
                component={renderField}
                label="Age"
                validate={[required, number, minValue18]}
                warn={tooOld}
            />
            <div>
                <button type="submit" disabled={submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'paymentsCreate',
   // a unique identifier for this form
})(FieldLevelValidationForm);

// import React, {Component} from 'react';
// import TextField from 'material-ui/TextField';
// import FlatButton from 'material-ui/FlatButton';
// class Create extends Component {
//     constructor(props) {
//         super(props);
//         this.typeMap = {
//             'String': 'text',
//             'Number': 'number'
//
//         };
//
//         this.state = {
//             form: []
//         };
//     }
//
//     componentDidMount() {
//         this.props.actions.getSchema().then((res) => {
//             this.setState({
//                 form: res
//             });
//         });
//     }
//
//
//     handleSubmit(e) {
//         e.preventDefault();
//         const {actions} = this.props;
//         console.log('actions', actions);
//
//         // actions.create(this.state);
//     }
//
//     handleChange(event) {
//         event.preventDefault();
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;
//
//         // this.setState({
//         //     [name]: value
//         // });
//     }
//
//     handleNumberChange(event) {
//         const target = event.target;
//         const value = target.value;
//         const name = target.name;
//
//         // this.setState({
//         //     [name]: value
//         // });
//     }
//
//     handleType(type) {
//         console.log('type', type);
//
//
//         return this.typeMap[type];
//     }
//
//     render() {
//         const {form} = this.state;
//         console.log('form', form);
//
// //         /*
// //         *
// //         *
// //          defaultValue={val.defaultValue}
// //          {/*id="num"*/}
// // {/*required*/}
// // {/*defaultValue={9}*/}
// // {/*min={-10}*/}
// // {/*max={12}*/}
// // {/*strategy="warn"*/}
// // {/*errorText={state.errorText}*/}
// // {/*onValid={onValid}*/}
// // {/*onChange={onChange}*/}
// // {/*onError={onError}*/}
// // {/*onRequestValue={onRequestValue}*/}
// // {/*onKeyDown={onKeyDown} />*/}
// //         *
// //         * */
//
//         return (
//             <div>
//                 <h4>Create New Payment</h4>
//                 <form>
//                     <div>
//                         {form.map((val, key) => {
//                             return (
//                                 <div key={key}>
//                                     <TextField
//                                         type={this.handleType.bind(this)(val.instance)}
//                                         name={val.path}
//                                         defaultValue={val.defaultValue}
//                                         max={val.max}
//                                         min={val.min}
//                                     />
//
//                                 </div>
//                             );
//                         })}
//                     </div>
//                     <FlatButton label={'Submit'} onClick={this.handleSubmit.bind(this)}/>
//                 </form>
//             </div>
//         )
//     }
//
// }
//
// export default Create;