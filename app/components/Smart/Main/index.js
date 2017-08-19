import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import { mapToProps as userMapToProps, actions as userActions} from '../../../redux/user/selectors';
import { mapToProps as searchersMapToProps, actions as searchersActions} from '../../../redux/searchers/selectors';
import { mapToProps as galleriesMapToProps, actions as galleriesActions} from '../../../redux/galleries/selectors';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { currentTag: '', open: false };
        this.goToRegister = this.goToRegister.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
        this.openDrawer = this.openDrawer.bind(this);
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

    openDrawer() {
        const {actions, user} = this.props;
        this.setState({open: !this.state.open});
        if (user) {
            actions.getGalleries({user_id: user.id});
        } else {
            console.warn('no auth user'); // solve by saving galleries on local storage
        }
    }

    handleClear() {
        const {user, actions} = this.props;
        actions.removeGalleries({user_id: user.id});
        this.setState({open: !this.state.open});
    }

    getGallery(gallery) {
        const {actions} = this.props;
        // console.log('this.state.currentTag', this.state.currentTag); // todo does not update currentTag
        // console.log('gallery.tag', gallery.tag);
        actions.updateWithData(gallery);
        this.setState({open: !this.state.open, currentTag: gallery.tag});
    }

    render() {
        const { user, searchers, galleries} = this.props;
        const { actions } = this.props;

        // todo break it to smaller components that get handlers/data by props - route base component is the only smart component: connect redux, router, pre load data
        return (
            <div>
                <AppBar
                    iconElementRight={<FlatButton onClick={user ? actions.logout : this.goToRegister}
                                                  label={user ? 'Logout' : 'Login'}/>}
                    onLeftIconButtonTouchTap={this.openDrawer}
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

                {Array.isArray(searchers.data.photo) && <div>
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
                </div>}

                <Drawer
                    docked={false}
                    width={350}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem onClick={this.handleClear.bind(this)}>
                        Clear Searches
                    </MenuItem>

                    {Array.isArray(galleries.data) && galleries.data.map((v, i) => {
                        return (
                            <MenuItem key={i} onClick={this.getGallery.bind(this, v)}>
                                <div className="row">
                                    <div className="col-xs-3">{v.tag}</div>
                                    <div className="col-xs-3">{v.service}</div>
                                    <div className="col-xs-3">{new Date(v.time).toLocaleDateString()}</div>
                                    <div className="col-xs-3">{v.total}</div>
                                </div>
                            </MenuItem>
                        )
                    })}
                </Drawer>
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