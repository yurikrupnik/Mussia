import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Router from '../../Wrappers/Router';
import Provider from '../Provider';
import {
    ServerRouter as Router,
    Route,
    Link,
    PrivateRoute,
    withRouter,
    Switch,
    StaticRouter
} from 'react-router-dom'

// export default App;

let Home = () => (<div>shit</div>)

class App extends Component {
    static propTypes = {
        initialState: PropTypes.object, // not required on server side rendering
    };

    constructor(props) {
        super(props);
    }

    render() {
        let {initialState} = this.props; // pass initial state of the app - redux currently
        return (
            <div>
                <h3>App</h3>
            </div>
            // {/*<Provider initialState={initialState} component={<Router {...this.props}/>} />*/}
        );
    }
}

export default App;