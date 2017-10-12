import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import tabEvent from 'react-tap-event-plugin';

const muiTheme = getMuiTheme(lightBaseTheme, {userAgent: 'all'});
tabEvent();

function withMaterial(WrappedComponent) {
    return class extends Component {
        render() {
            return (
                <MuiThemeProvider muiTheme={muiTheme}>
                    <WrappedComponent />
                </MuiThemeProvider>
            )
        }
    }
}

export default withMaterial;