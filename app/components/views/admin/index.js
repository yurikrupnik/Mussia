import React, {Component} from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom';
// import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import routes from './routes';
import withRoutes from '../../HOC/withSubRoutes';


const withMouse = function (WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            // this.state = {x: 0, y: 0};
            this.handleMouseMove = this.handleMouseMove.bind(this);
        }

        state = {x: 0, y: 0};

        handleMouseMove(event) {
            this.setState({
                x: event.clientX,
                y: event.clientY
            });
        }

        render() {
            return (
                <div style={{height: '100%'}} onMouseMove={this.handleMouseMove.bind(this)}>
                    <WrappedComponent {...this.state}/>
                </div>
            )
        }
    }
};

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
        return (
            <div style={{height: '100%'}} onMouseMove={this.handleMouseMove.bind(this)}>
                {this.props.children(this.state)}
            </div>
        )
    }
}

const Ass = () => <Mouse>
    {mouse => {
        return <MousePosition x={mouse.x} y={mouse.y}/>
    }}
</Mouse>;

const MousePosition = ({x, y}) => {
    return (
        <div style={{height: '100%'}}>
            <div style={{height: '100%'}}>
                <h1>The mouse position is ({x}, {y})</h1>
            </div>
        </div>
    )
};

class Admin extends Component {

    render() {

        const StaticMouse = withMouse(MousePosition);

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
                <StaticMouse/>
                <Mouse>
                    {mouse => {
                        return <MousePosition x={mouse.x} y={mouse.y}/>
                    }}
                </Mouse>
                <Ass />
            </div>
        )
    }
}


export default withRoutes(connect(function (state) {
    return {user: state.users};
})(Admin), routes);