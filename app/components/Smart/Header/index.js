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


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        // const {location, history, user} = nextProps;
        // if (!user) {
        //     history.go('/register');
        //
        // }
        // const {pathname} = location;
        // let index = _.findIndex(routes, {path: pathname});
        // // // console.log('user', user);
        // //
        // if (!user) {
        //     history.push('/register');
        //     index = _.findIndex(routes, {path: '/register'});
        // }
        // } else if (pathname === '/' || index < 0) {

        //     history.push('/dashboard');
        //     index = _.findIndex(routes, {path: '/dashboard'});
        // }
        //
        // this.setState({value: index});
        console.log('componentWillReceiveProps nextProps', nextProps);

    }

    componentWillMount() {
        const {location, history, user} = this.props;
        const {pathname} = location;
        let index = _.findIndex(routes, {path: pathname});
        // console.log('user', user);

        if (pathname === '/' || index < 0) {
            history.push('/dashboard');
            index = _.findIndex(routes, {path: '/dashboard'});
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
        console.log('actions', actions);
        actions.logout();
    }

    render() {
        const {dispatch, history, location, match, user} = this.props;
        const {pathname} = location;
        const {picture} = user || {};
        const {data} = picture || {url: ''};
        const A = ({data})=> (<Avatar onClick={this.logout.bind(this)} src={data.url}/>);
        return user ? (<Toolbar>
            <ToolbarGroup firstChild={true}>
                <DropDownMenu value={this.state.value} onChange={this.handleChange.bind(this)}>
                    {routes.map((route, i) => {
                        return (
                            <MenuItem key={i} value={i} primaryText={route.title}/>
                        )
                    })}
                </DropDownMenu>
            </ToolbarGroup>
            <ToolbarGroup>
                {data ? <A data={data} /> : null}
            </ToolbarGroup>
        </Toolbar>) : (<Redirect to="/register"/>)

    }
}

export default withRouter(connect(getUser, dispatchActions)(Header));