import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getStateBySelector, createDispatcherByResource} from '../../../services/client/crud/util';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Login extends Component {
    static muiName = 'FlatButton';

    render() {
        return (

            <FlatButton children={<Link to="/register">Login</Link>} label="Login"/>
        );
    }
}

const Logged = (props) => {
    debugger
    let {signout} = props;
    return (
       <div>
           <IconMenu
               {...props}
               iconButtonElement={
                   <IconButton><MoreVertIcon /></IconButton>
               }
               targetOrigin={{horizontal: 'right', vertical: 'top'}}
               anchorOrigin={{horizontal: 'right', vertical: 'top'}}
           >
               <MenuItem primaryText="Refresh"/>
               <MenuItem primaryText="Help"/>
               <MenuItem primaryText="Sign out" onClick={signout}/>
           </IconMenu>
       </div>
    );
};

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */

import request from 'superagent';


function singout() {
    return request.get('/auth/logout').then(function (data) {
        console.log('data', data);
        return data;
    })
}

function singin(body) {
    return request.post('/auth/local')
        .send(body)
        .then(function (data) {
            console.log('data', data);
            return data;
        })
}


class Nav extends Component {
    constructor(props) {
        // console.log('in contrcutro props', props);

        super(props);
        this.handleLogOut = this.handleLogOut.bind(this);
        this.state = {
            logged: true,
        };
    }

    componentDidMount() {
        let {user, history} = this.props;
        if (!user) {
            history.push('/register');
        }
    }


//     handleChange(event, logged) {
//         // console.log('logged', logged);
//         // console.log('event', event);
// // debugger
//         singout();
//         // this.setState({logged: logged});
//     }
//
    handleLogOut() {
        // singout();
    }

    render() {
        const {user} = this.props;
        // console.log('user', user);
        console.log('this.props', this.props);



        return (
            <div>
                <AppBar
                    title="Title"
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    iconElementRight={user ? <Logged /> : <Login />}
                />
            </div>
        );
    }
}


// const Nav = (props) => {
//     console.log('props', props);
//
//     return (
//         <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/settings">Settings</Link></li>
//             <li><Link to="/payments">Payments</Link></li>
//             <li><Link to="/topics">Topics</Link></li>
//             <li><Link to="/counter">Counter</Link></li>
//             <li><Link to="/counters">Counters</Link></li>
//             <li><Link to="/register">Register</Link></li>
//         </ul>
//     );
// };

export default withRouter(connect(getStateBySelector('user'))(Nav));