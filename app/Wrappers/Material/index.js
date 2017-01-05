import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import tabEvent from 'react-tap-event-plugin';
import Router from '../../Router/Router';

tabEvent();

export default ({}) => {
    console.log('inside myu themere');

    const muiTheme = getMuiTheme({
        // userAgent: 'all'
    });

    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Router />
        </MuiThemeProvider>
    )
}

