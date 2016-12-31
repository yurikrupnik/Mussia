import React, {Component} from 'react';
import {Router, Link, browserHistory} from 'react-router'; // todo work on it!
class Love extends Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <div>
                        <Link to="/">Dashboard</Link>
                    </div>
                    <div>
                        <Link to="/demo">demo route</Link>
                    </div>
                    <div>
                        <Link to="/pay">pay</Link>
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
// const Love = React.createClass({
//     componentDidMount() {
//         // payments.getCount().then(count => console.log('count', count));
//     },
//
//     handlePaymentsReturn(response) {
//
//     },
//
//     handleClick(e) {
//         // return payments.getPayments().then(function (data) {
//         //     console.log('data', data);
//         // });
//     },
//     render() {
//         return (
//             <div>
//                 <h1>App</h1>
//                 <ul>
//                     <Link to="/">Dashboard</Link>
//                     <Link to="/demo">demo route</Link>
//                     <Link to="/pay">pay</Link>
//                     <Link to="/login">login</Link>
//                     <Link to="/logout">logout</Link>
//                 </ul>
//                 {this.props.children}
//             </div>
//         )
//     }
// });
export let routes = {
    path: '/',
    component: Love,
    // childRoutes: [
    //     {
    //         path: '/payments',
    //         // component: Payments
    //     },
    //     {
    //         path: 'pay',
    //         // component: Pay
    //     }
    // ],
    // getChildRoutes(location, cb) {
    //     console.log('location', location);
    //     console.log('cb', cb);
    //     require.ensure([], (require) => {
    //         // cb(null, [ require('./AboutRoute') ])
    //     })
    // },
    // indexRoute: {
    //     component: Pay
    // }
};