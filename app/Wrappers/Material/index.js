import React, {Component} from 'react';
// import App from '../App/App';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
require("react-tap-event-plugin")();


export default () => {
    let agent = global.navigator && global.navigator.userAgent;
    console.log('agent', agent);

    const muiTheme = getMuiTheme({
        userAgent: 'all'
    });
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <App />
        </MuiThemeProvider>
    )
}

