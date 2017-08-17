import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

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
                        <form method="POST" action="/auth/login">
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
