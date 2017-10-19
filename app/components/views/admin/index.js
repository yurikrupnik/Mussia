import React, {Component} from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';
// import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import routes from './routes';
import withLayout from '../../HOC/Layout'

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



export default withLayout(connect(function (state) {
    return {user : state.users};
})(Admin), routes);