import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import {Link, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser, dispatchActions} from '../../../redux/selectors/user';


class Header extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     value: 0
        // }
    }

    // componentWillReceiveProps(nextProps) {
        // console.log('componentWillReceiveProps nextProps', nextProps);
    // }

    componentWillMount() {
        const {location, history, user} = this.props;
        if (!user) {
            history.push('/register');
        }
    }


    // handleChange(e, index, value) {
    //     const {history} = this.props;
    //     this.setState({value: index});
    //     history.push('/' + e.target.textContent.toLowerCase());
    // }

    logout() {
        const {actions} = this.props;
        actions.logout();
    }

    render() {
        const {dispatch, history, location, user, match} = this.props;
        // const {location, history, user} = this.props;
        console.log('user in app', user);

        // if (!user) {
        //     console.log('nouser');
        //
        //     history.push('/register');
        // }
        const {actions} = this.props;
        const {pathname} = location;

        return (<div>
            <Link to={'/register'}>register</Link>
            <input type="text" />
            list
        </div>)

    }
}

export default withRouter(connect(getUser, dispatchActions)(Header));