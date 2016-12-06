import React, {Component} from 'react';
import Register from '../../api/login';
// import FlatButton from 'material-ui/FlatButton;'


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
                <form name="login" ref={'login'}>
                    <input type="text" name="name"/>
                    <input type="password" name="password"/>
                    <button onClick={this.handleSubmit.bind(this, 'login')}>Send</button>
                </form>
            </div>
        )
    }
}