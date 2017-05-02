import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import TimePicker from 'material-ui/TimePicker';

class Register extends Component {
    constructor(props) {
        super(props);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <div>
                <h1> Node Authentication</h1>
                <p>Login or Register with:</p>
                <TimePicker
                    hintText="12hr Format"
                />
                <div className="fb-login-button" data-max-rows="1" data-size="icon" data-show-faces="false" data-auto-logout-link="false"></div>
                <hr/>
                <div>
                    <a href="/auth/facebook">Facebook</a>
                </div>
                <div>
                    <a href="/auth/github">Github</a>
                </div>

                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />

                <form name="inituser" >
                    <div >
                        <TextField
                            hintText="Email Field"
                            floatingLabelText="Email"
                            type={'email'} name={'email'}
                        />
                    </div>
                    <div >
                        <TextField
                            hintText="Password Field"
                            floatingLabelText="Password"
                            type={'password'} name={'password'}
                        />
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Register;