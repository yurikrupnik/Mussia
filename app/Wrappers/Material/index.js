import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import tabEvent from 'react-tap-event-plugin';
tabEvent();

export default ({component}) => {
    const muiTheme = getMuiTheme({
        userAgent: 'all'
    });

    // MuiThemeProvider renders the component, this way components and all its children have access to material-ui
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            {component}
        </MuiThemeProvider>
    )
}

