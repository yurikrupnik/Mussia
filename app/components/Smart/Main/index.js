import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AutoComplete from 'material-ui/AutoComplete';

import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapToProps as userMapToProps, dispatchActions as userDispatchActions} from '../../../redux/user/selectors';
import { mapToProps as searchersMapToProps, dispatchActions as searchersDispatchActions} from '../../../redux/searchers/selectors';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { search: '' };
        // this.logout = this.logout.bind(this);
        this.goToRegister = this.goToRegister.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    goToRegister() {
        const { history } = this.props;
        history.push('/register');
    }

    submit(e) {
        console.log('e', e);

        console.log('this.state.search', this.state.search);

    }

    handleChange(e) {
        this.setState({ search: e.target.value });
    }

    render() {
        console.log('this.props', this.props);

        const { dispatch, history, location, user, match, searches } = this.props;
        const { actions } = this.props;
        const { pathname } = location;
console.log('actions', actions);
console.log('actions', searches);

        return (
            <div>
                <AppBar
                    iconElementRight={<FlatButton onClick={user ? actions.logout : this.goToRegister}
                                                  label={user ? 'Logout' : 'Login'}/>}
                />

                <div className="row">
                    <div className="col-xs-11">
                        <TextField fullWidth={true}
                                   hintText="Search for images"
                                   onChange={this.handleChange}
                        />
                    </div>
                    <div className="col-xs-1">
                        <FlatButton
                            onClick={this.submit.bind(this)}
                            label={'Search'}
                        />
                    </div>
                </div>

            </div>
        );
    }
}

const combinedMapTpProps = state => {
    return {
        user: userMapToProps(state),
        searchers: searchersMapToProps(state)
    }
};

const combinedDispatchActions = dispatch => {
    // const userActions = userDispatchActions(dispatch);
    // const searchesActions = searchersDispatchActions(dispatch);
    return {
        actions: Object.assign({}, userDispatchActions, searchersDispatchActions)
    }
};
// connect(combinedMapTpProps, combinedDispatchActions)(Main)
export default connect(combinedMapTpProps)(withRouter(Main));