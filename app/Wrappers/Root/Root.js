import React, {Component} from 'react';
import {Link} from 'react-router';
export default class Root extends Component {
    render() {
        console.log('this.props', this.props);

        return (
            <div>
                <h1>App</h1>
                <ul>

                    <div>
                        <Link to="/">Dashboard</Link>
                    </div>
                    <div>
                        <Link to="/count list">count list</Link>
                    </div>
                    <div>
                        <Link to="/counter">counter</Link>
                    </div>
                    <div>
                        <Link to="/payments">payments</Link>
                    </div>
                    <div>
                        <Link to="/login">login</Link>
                    </div>
                    <div>
                        <Link to="/logout">logout</Link>
                    </div>
                </ul>
                {this.props.children}
            </div>
        )
    }
}