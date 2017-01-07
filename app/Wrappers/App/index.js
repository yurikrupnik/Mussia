import React, {PropTypes, Component} from 'react';
import {RouterContext} from 'react-router';
import Router from '../../Router/Router';


// import configureStore from '../../redux/store/store';
// import {Provider} from 'react-redux'
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import tabEvent from 'react-tap-event-plugin';
// tabEvent();
//
// const muiTheme = getMuiTheme({
//     userAgent: 'all'
// });

import Material from '../Material';
import Provider from '../Provider';


let RouterWrapper = (props) => {
    let RoutesWrapper = global.window ? <Router /> : <RouterContext {...props} />; // server render and client render - get the correct element
    return (
         <Material component={RoutesWrapper} />
    )
};

export default class AppWrapper extends Component {
    static propTypes = {
        initialState: PropTypes.object.isRequired, // not required on server side rendering
    };

    constructor(props) {
        super(props);
    }

    render() {
        let {initialState} = this.props; // pass initial state of the app - redux currently
        // let RoutesWrapper = global.window ? <Router /> : <RouterContext {...this.props} />; // server render and client render - get the correct element
        // let Matt = <Material component={RoutesWrapper} />;
        return (
            <Provider initialState={initialState} component={<RouterWrapper {...this.props}/>} />
        );
    }
}