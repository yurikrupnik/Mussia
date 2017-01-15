import React, {Component} from 'react';
import {Link} from 'react-router';

import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {fetchUser} from '../../redux/actions/user';
import {getUser, dispatchActions} from '../../redux/selectors/user';

class Root extends Component {

    componentDidMount() {
        if (!this.props.user) {
            // this.props.router.push('/register');
        }
    }
    render() {
        let {user} = this.props;
        return (
            <div>
                <h1>App</h1>
                <h2>user {this.props.user}</h2>
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
                    </div> : nul}

                    {user ? <div>
                    <Link to="/logout">logout</Link>
                        </div> : null}
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default connect(getUser, dispatchActions)(Root);

// class Payments extends Component {
//
//     constructor(props) {
//         super(props);
//     }
//
//     static propTypes = {
//         actions: PropTypes.object.isRequired,
//         isFetching: PropTypes.bool.isRequired,
//         items: PropTypes.array.isRequired,
//     };
//
//
//     componentDidMount() {
//         const {actions} = this.props;
//         actions.fetchPayments();
//     }
//     handleGetPayments(){
//         const {actions} = this.props;
//         return actions.fetchPayments();
//     }
//     render() {
//         const {items, isFetching} = this.props;
//         return (
//             <div>
//                 <h5>Payments</h5>
//                 <div>
//                     <FlatButton onClick={this.handleGetPayments.bind(this)} label="Default" />
//                 </div>
//                 <div>
//                     <Link to="/payments/counter" >go to counter inside payments</Link>
//                     <div>count {items.length}</div>
//                     {items.length > 0 &&
//                     <div>
//                         {items.map((val, i) => {
//                             return <div key={i}>{val.name}</div>
//                         })}
//                     </div>}
//                 </div>
//                 {this.props.children}
//             </div>
//
//         )
//     }
// }
//
// export default connect(getPayments, dispatchActions)(Payments);