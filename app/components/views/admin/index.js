import React, {Component} from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';
// import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import routes from './routes';
import withRoutes from '../../HOC/withSubRoutes';

class Admin extends Component {
    render() {
        return (
            <div>
                <h2>Admin</h2>
                <ul>
                    <li>
                        <Link to="/admin/users">
                            Users
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}


export default withRoutes(connect(function (state) {
    return {user: state.users};
})(Admin), routes);