import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    // if (!values.age) {
    //     errors.age = 'Required'
    // } else if (isNaN(Number(values.age))) {
    //     errors.age = 'Must be a number'
    // } else if (Number(values.age) < 18) {
    //     errors.age = 'Sorry, you must be at least 18 years old'
    // }
    return errors
};

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div>
        <label>{label}</label>
        <div>
            {/*<input {...input} placeholder={label} type={type} />*/}
            <TextField {...input} placeholder={label} type={type}/>
            {touched &&
            ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const SyncValidationForm = (props) => {
    const { handleSubmit, pristine, reset, submitting, actions,submitSucceeded } = props;
    console.log('submitted', submitSucceeded);

    return (
        <form onSubmit={handleSubmit}>
            <Field name="email" type="email" component={renderField} label="Email"/>
            <Field name="password" type="password" component={renderField} label="Password"/>
            <div>
                <button type="submit" disabled={submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    );
};

// import {login} from '../../../api/auth/request'
import {
    login
} from '../../../redux/actions/user';
// const Register = reduxForm({
//     form: 'login',  // a unique identifier for this form
//     onSubmit: login,
//     // onSubmitSuccess: (res, dispatch) => {
//     //
//     // },
//     validate                 // <--- validation function given to redux-form
// })(SyncValidationForm);
// import React, {Component} from 'react';
// import TextField from 'material-ui/TextField';
// import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import {connect} from 'react-redux';

let style = {
    marginTop: '5px',
    marginBottom: '5px',
    marginLeft: '0',
    marginRight: '0',
};

class Register extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();
        let {login} = this.props.actions;
        let email = this.refs['email'].input.value;
        let password = this.refs['password'].input.value;
        login({
            email,
            password
        });
    }

    render() {

        return (

            <div className="row center-xs">
                <div className="col-xs-6">
                    <div className="box">
                        <form method="POST" action="/auth/login" ref="shit"> {/*todo why not redirect using action*/}
                            <div >
                                <TextField fullWidth={true}
                                           hintText="Email Field"
                                           floatingLabelText="Email"
                                           type={'email'} name={'email'}
                                />
                            </div>
                            <div >
                                <TextField fullWidth={true}
                                           hintText="Password Field"
                                           floatingLabelText="Password"
                                           type={'password'} name={'password'}
                                />
                            </div>

                            {/*<button type="submit">sub</button>*/}
                            <div className="row end-xs">
                                <FlatButton fullWidth={true} label="Sign in" primary={true} type="submit"/>
                            </div>
                        </form>

                        <Divider style={style}/>

                        <div className="social-links">
                            <div>
                                <a href="/auth/facebook">Facebook</a>
                            </div>
                            <div>
                                <a href="/auth/flickr">Flickr</a>
                            </div>
                            <div>
                                <a href="/auth/github">Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import {
    getUser,
    dispatchActions
} from '../../../redux/selectors/user';
export default connect(getUser, dispatchActions)(Register);
