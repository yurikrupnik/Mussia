import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import tabEvent from 'react-tap-event-plugin';
tabEvent();

const muiTheme = getMuiTheme(lightBaseTheme);

export default ({component}) => {
    // MuiThemeProvider renders the component, this way components and all its children have access to material-ui
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            {component}
        </MuiThemeProvider>
    )
}

