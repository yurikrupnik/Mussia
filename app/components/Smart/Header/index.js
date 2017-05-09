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
import {getStateBySelector, createDispatcherByResource} from '../../../services/client/crud/util';

import _ from 'lodash';

import routes from '../App/routes';

import {getUser, dispatchActions} from '../../../redux/selectors/user';

const filterHiddenRoutes = (routes) => {
    return _.filter(routes, (val, i) => {
        return !(_.has(val, 'hidden') && val.hidden);
    });
};


const renderActiveRoutes = (routes) => {
    const shownLinks = filterHiddenRoutes(routes);
    return _.map(shownLinks, (route, i) => {
        return (
            <MenuItem key={i} value={i} primaryText={route.title}/>
        )
    });
};

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps nextProps', nextProps);
    }

    filterHiddenRoutes() {

    }

    componentWillMount() {
        const {location, history, user} = this.props;
        const {pathname} = location;
        let index = _.findIndex(filterHiddenRoutes(routes), {path: pathname});
        if (pathname === '/' || index < 0) {
            history.push('/dashboard');
            index = _.findIndex(filterHiddenRoutes(routes), {path: '/dashboard'});
        }
        this.setState({value: index});
    }


    handleChange(e, index, value) {
        const {history} = this.props;
        this.setState({value: index});
        history.push('/' + e.target.textContent.toLowerCase());
    }

    logout() {
        const {actions} = this.props;
        actions.logout();
    }

    render() {
        const {dispatch, history, location, match, user} = this.props;
        const {pathname} = location;


        return user ? (<Toolbar>
            <ToolbarGroup firstChild={true}>
                <DropDownMenu value={this.state.value} onChange={this.handleChange.bind(this)}>
                    {renderActiveRoutes(routes)}
                </DropDownMenu>
            </ToolbarGroup>
            <ToolbarGroup>
                <Avatar onClick={this.logout.bind(this)} src={user.picture.data.url}/>
            </ToolbarGroup>
        </Toolbar>) : (<Redirect to="/register"/>)

    }
}

export default withRouter(connect(getUser, dispatchActions)(Header));