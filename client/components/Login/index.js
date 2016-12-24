import React, {Component} from 'react';
import Register from '../../api/login';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Chip from './chip'
import GridListExampleSingleLine from './grid-list';
import './Login.scss';
export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(formName, event) {
        event.preventDefault();
        let form = document.forms[formName];
        let user = {
            name: form.name.value,
            password: form.password.value
        };
        return Register.logUser(user).then(function (d) {
            console.log('d', d);

        });
    }

    render() {
        let formName = 'login';
        return (
            <div>
                <form name={formName} ref={formName}>
                    <TextField name="name" />
                    <TextField name="password"/>
                    <FlatButton label="login" onClick={this.handleSubmit.bind(this, 'login')} />
                    {/*<button onClick={this.handleSubmit.bind(this, 'login')}>Send</button>*/}
                </form>
            </div>
        )
    }
}