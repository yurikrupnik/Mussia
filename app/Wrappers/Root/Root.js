import React, {Component} from 'react';
import {Link} from 'react-router';

import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
// import {fetchUser} from '../../redux/actions/user';
import {getUser, dispatchActions} from '../../redux/selectors/user';
// import {getPayments, dispatchActions} from '../../redux/selectors/user';

class Root extends Component {

    componentDidMount() {
        let {user} = this.props;
        if (!user) {
            this.props.router.push('/register');
        }
    }

    render() {
        let {user} = this.props;
        return (
            <div>
                <h1>App</h1>
                {user ? <span>{user.name}</span> : <span>not registered</span>}
                <ul>

                    <div>
                        <Link to="/">Dashboard</Link>
                    </div>
                    <div>
                        <Link to="/counters">Counters</Link>
                    </div>
                    <div>
                        <Link to="/counter">counter</Link>
                    </div>
                    <div>
                        <Link to="/payments">payments</Link>
                    </div>

                    {!user ? <div>
                        <Link to="/register">Register</Link>
                    </div>: null}

                    {user ? <div>
                    <Link to="/logout">logout</Link>
                        </div>: null}
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default connect(getUser, dispatchActions)(Root);