import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

let style = {
    marginTop: '15px',
    marginBottom: '15px',
    marginLeft: '0',
    marginRight: '0',
};

export default () => (
    <div className="row center-xs">
        <div className="col-xs-6">
            <form className="box" method="POST" action="/auth/login">
                <div className="title margin-top-10">Register</div>
                <TextField fullWidth={true}
                           hintText="Email Field"
                           floatingLabelText="Email"
                           type={'email'} name={'email'}
                />
                <TextField fullWidth={true}
                           hintText="Password Field"
                           floatingLabelText="Password"
                           type={'password'} name={'password'}
                />

                <RaisedButton fullWidth={true} label="Join now" primary={true} type="submit"/>

                <Divider style={style}/>

                <a href="/auth/facebook"><RaisedButton label="Continue with Facebook" fullWidth={true}/></a>
                <a href="/auth/flickr"><RaisedButton label="Continue with Flickr" fullWidth={true}/></a>
            </form>
        </div>
    </div>
);
