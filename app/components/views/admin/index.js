import React, {Component} from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';
// import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import routes from './routes';
import withRoutes from '../../HOC/withSubRoutes';

class Mouse extends Component {
    constructor(props) {
        super(props);
        this.state = {x: 0, y: 0};
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {

        console.log('this.props.children', this.props.children);

        return (
            <div style={{height: '100%'}} onMouseMove={this.handleMouseMove.bind(this)}>
                {this.props.children(this.state)}
            </div>
        )
    }
}


class Admin extends Component {

    render() {
        return (
            <div style={{height: '100%'}}>
                <h2>Admin</h2>
                <ul>
                    <li>
                        <Link to="/admin/users">
                            Users
                        </Link>
                    </li>
                </ul>
                <Mouse>
                    {(mouse) => {
                        return (
                            <div style={{height: '100%'}}>
                                <div style={{height: '100%'}}>
                                    <h1>The mouse position is ({mouse.x}, {mouse.y})</h1>
                                </div>
                            </div>
                        )
                    }}
                </Mouse>
            </div>
        )
    }
}


export default withRoutes(connect(function (state) {
    return {user: state.users};
})(Admin), routes);