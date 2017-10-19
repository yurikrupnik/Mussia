import React, {Component} from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';
// import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import routes from './routes';
import withRoutes from '../../HOC/withRoutes';

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


export default withRoutes(connect(function (state) {return {users : state.api.users}})(Settings), routes);