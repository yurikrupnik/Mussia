import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Router from '../../Wrappers/Router';
// import Provider from '../Provider';
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Link,
    PrivateRoute,
    withRouter,
    Switch,
    StaticRouter
} from 'react-router-dom'

// export default App;


const Home = (props) => (
    <div>
        <h2>Home</h2>
        <Link to="/payments">payments</Link>
        <Link to="/topics">topics</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/counters">Counters</Link>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Topics = ({match}) => {
    return (
        <Router>
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/rendering`}>
                            Rendering with React
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/components`}>
                            Components
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>
                            Props v. State
                        </Link>
                    </li>
                </ul>

                <Route path={`${match.url}/:topicId`} component={Topic}/>
                <Route exact path={match.url} render={() => (
                    <h3>Please select a topic.</h3>
                )}/>
            </div>
        </Router>
    )
};

const Topic = ({match}) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);


import Payments from '../../api/payments/component';
import Counter from '../Counter';
import Counters from '../Counters';
import Register from '../Register';

const Nav = (props) => {
    console.log('props', props);

    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/payments">Payments</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/counters">Counters</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
    );
};

const Dashboard = (props) => {
    console.log('props', props);

    return (<div>Dashboard</div>)
};


const Rou = () => {
    return (
   <div>
       <Router>
           <div>
               <Nav/>
               <Route exact={true} path="/" component={Dashboard}/>
               <Route exact={true} path="/about" component={About}/>
               <Route exact={true} path="/topics" component={Topics}/>
               <Route exact={true} path="/payments" component={Payments}/>
               <Route exact={true} path="/counter" component={Counter}/>
               <Route exact={true} path="/counters" component={Counters}/>
               <Route exact={true} path="/register" component={Register}/>
           </div>
       </Router>
   </div>
    )
};

// const Rp = withRouter(Rou);
// console.log('Rp', Rp);
// console.log('Rou', Rou);
import configureStore from '../../redux/store/store';
import {Provider} from 'react-redux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import tabEvent from 'react-tap-event-plugin';
tabEvent();

const muiTheme = getMuiTheme({
    userAgent: 'all'
});

class App extends Component {
    static propTypes = {
        initialState: PropTypes.object, // not required on server side rendering
    };

    constructor(props) {
        super(props);
    }

    render() {
        let {initialState} = this.props; // pass initial state of the app - redux currently
        console.log('this.props', this.props);

        // return (
        //     <Rou />
        // );


        // export default ({initialState, component}) => {
        //     debugger;
            let store = configureStore(initialState); // state passed in the client - this is the pre load state of redux, defaults to empty object inside configureStore
            return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Provider store={store}>
                    <Rou/>
                </Provider>
            </MuiThemeProvider>
            );
        // }
    }
}

export default App;