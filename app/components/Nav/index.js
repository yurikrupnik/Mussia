import React, {Component} from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


class Login extends Component {
    // static muiName = 'FlatButton';

    render() {
        return (

            <FlatButton children={<Link to="/register">Login</Link>} label="Login"/>
        );
    }
}

class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MenuItem primaryText="Refresh" onClick={this.handleClick}/>
        )
    }
}


class MenuRight extends Component {
    static muiName = 'IconButton';

    constructor(props) {
        super(props);
    }

    handleLogOut() {
        // singout().then(logout);
    }

    handleClick(e) {
        let {history} = this.props;
        history.push('/' + e.target.textContent.toLowerCase());
    }

    render() {
        return (
            <div>
                <IconMenu
                    iconButtonElement={
                        <IconButton><MoreVertIcon /></IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <MenuItem primaryText="Sign out" onClick={this.handleLogOut.bind(this)}/>
                </IconMenu>
            </div>
        );
    }

}
class MenuLeft extends Component {
    // static muiName = 'IconButton';

    constructor(props) {
        super(props);
    }

    handleLogOut() {
        // singout();
    }

    handleClick(e) {
        let {history} = this.props;
        history.push('/' + e.target.textContent.toLowerCase());
    }

    render() {
        return (
            <div>
                <IconMenu
                    iconButtonElement={
                        <IconButton><MoreVertIcon /></IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <MenuItem primaryText="Dashboard" onClick={this.handleClick.bind(this)}/>
                    <MenuItem primaryText="Map" onClick={this.handleClick.bind(this)}/>
                    <MenuItem primaryText="Settings" onClick={this.handleClick.bind(this)}/>
                    <MenuItem primaryText="Reports" onClick={this.handleClick.bind(this)}/>
                    <MenuItem primaryText="Register" onClick={this.handleClick.bind(this)}/>
                    <MenuItem primaryText="Sign out" onClick={this.handleLogOut.bind(this)}/>
                </IconMenu>
            </div>
        );
    }

}
function handlePathname(str) {
    return str.replace('/', '')
}

import _ from 'lodash'

class Nav extends Component {

    constructor(props, context) {
        super(props);
        this.state = {
            redirect: !!props.user
        }
    }

    goto() {
        let {user, history} = this.props;
        history.push('/register');
    }

    render() {
        const {user, location, history} = this.props;
        const {pathname} = location;
        const title = _.capitalize(handlePathname(pathname));
        const { redirect } = this.state;

        // if (!redirect && pathname !== '/register') {
        //     return <Redirect to='/register'/>;
        // }
        return (
            <div>
                <AppBar
                    title={title}
                    iconElementRight={<MenuRight {...this.props}/>}
                    iconElementLeft={<MenuLeft {...this.props}/>}
                />
            </div>
        );
    }
}


export default withRouter(connect()(Nav));