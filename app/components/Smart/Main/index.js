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
import { mapToProps as userMapToProps, actions as userActions} from '../../../redux/user/selectors';
import { mapToProps as searchersMapToProps, actions as searchersActions} from '../../../redux/searchers/selectors';
import { mapToProps as galleriesMapToProps, actions as galleriesActions} from '../../../redux/galleries/selectors';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { currentTag: '' };
        this.goToRegister = this.goToRegister.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
    }

    componentDidMount() {
        if (this.props.user) {
            this.props.actions.getGalleries({user_id: this.props.user.id});
        }
    }

    goToRegister() {
        const { history } = this.props;
        history.push('/register');
    }

    handleChange(e) {
        this.setState({ currentTag: e.target.value });
    }

    submit(e) {
        const {currentTag} = this.state;
        const {actions} = this.props;
        actions.search({tag: currentTag});
    }

    handleNextPage() {
        const {currentTag} = this.state;
        const {actions, searchers} = this.props;
        actions.searchByPage({tag: currentTag, page: searchers.data.page + 1});
    }

    render() {
        const { user, searchers, galleries} = this.props;
        const { actions } = this.props;
        console.log('galleries', galleries);

        // todo break it to smaller components that get handlers/data by props
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
                            disabled={searchers.active}
                            onClick={this.submit}
                            label={'Search'}
                        />
                    </div>
                </div>

                {Array.isArray(searchers.data.photo) ? <div>
                    <div className="row">
                        {searchers.data.photo.map(p => {
                            return (
                                <div key={p.id} className="col-xs-3">
                                    <img height={'100%'} width={'100%'} src={`https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`}
                                         alt=""/>
                                </div>
                            )
                        })}
                    </div>
                    <FlatButton disabled={searchers.active} label="Next page" onClick={this.handleNextPage}/>
                </div>: null}
            </div>
        );
    }
}

const combinedMapTpProps = state => ({
    user: userMapToProps(state),
    searchers: searchersMapToProps(state),
    galleries: galleriesMapToProps(state)
});

const combinedDispatchActions = dispatch => ({
    actions: bindActionCreators(Object.assign({}, userActions, searchersActions, galleriesActions), dispatch)
});

export default connect(combinedMapTpProps, combinedDispatchActions)(withRouter(Main));