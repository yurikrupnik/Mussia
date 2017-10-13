import React, {Component} from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';
// import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import routes from './routes';
import withLayout from '../../HOC/Layout'

const SettingsNav = (props) => {
    console.log('props', props);

    return (
        <div>
            <h2>Settings</h2>
            <ul>
                <li>
                    <Link to="/settings/profiles">
                        Profiles
                    </Link>
                </li>
                <li>
                    <Link to="/settings/attachment">
                        Attachment
                    </Link>
                </li>
            </ul>
        </div>
    )
};

class Settings extends Component {
    render() {
        console.log('this.props', this.props);

        return (
            <div>
                <h2>Settings</h2>
                <ul>
                    <li>
                        <Link to="/settings/profiles">
                            Profiles
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings/attachment">
                            Attachment
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}



export default withLayout(connect(function (state) {
    return {user : state.users};
})(Settings), routes);