import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import resource from './request';
import {selector, url} from './config';
import {
    BrowserRouter as Router,
    Route,
    Link,
    PrivateRoute,
    withRouter,
    Switch,
    StaticRouter
} from 'react-router-dom'

const Payment = ({match}) => {
    const {paymentId} = match.params;
    return (
        <div>
            <h3>{paymentId}</h3>

            <form name="yuri">
                <input type="text" name="name"/>
                <input type="text" name="info"/>
            </form>


        </div>
    );
};

// const PaymentsData = ({match, data, methods}) =>{
//     console.log('methods', methods);
//
//     return ( data ?
//         <div>
//             <div>count {data.length}</div>
//             {data.length > 0 &&
//             <div>
//                 {data.map((val, i) => {
//                     let to = `${match.url}/${val._id}`;
//                     return <div key={i}>
//                         <Link to={to}>
//                             {to}
//                         </Link>
//                         <h2>{val.name}</h2>
//                         <div>{val.info}</div>
//                         <button onClick={methods.delete.bind(null, val)}>delete</button>
//                     </div>
//                 })}
//             </div>}
//         </div> : null
//     )
// };

const RouteWithSubRoutes = (route) => {
    return (
        <Route path={route.path} exact={route.exact} render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes}/>
        )}/>
    );
};

class Payments extends Component {

    constructor(props) {
        super(props);
    }

    static get selector() {
        return selector;
    }

    static get resource() {
        return resource;
    }

    static get url() {
        return url;
    }

    // componentDidMount() {
    //     // const {actions} = this.props;
    //     // actions.read({fields: 'name'}, {yalublu: false});
    // }

    // handleGet() {
    //     const {actions, location} = this.props;
    //     const {pathname, query, search} = location;
    //     actions.read(query, {yalublu: true}, {
    //         fields: ['name', 'info']
    //     });
    // }
    //
    // handleCreate() {
    //     const {actions, location} = this.props;
    //     const {pathname, query, search} = location;
    //     return actions.create(query, {}, {name: 'yuri', info: 'love'});
    // }
    //
    // handleUpdate() {
    //     const {actions, location} = this.props;
    //     const {pathname, query, search} = location;
    //     // const {actions} = this.props;
    //     return actions.update(query, {yalublu: true});
    //
    // }
    //
    // handleDelete(item) {
    //     const {actions, location} = this.props;
    //     const {pathname, query, search} = location;
    //     // const {actions} = this.props;
    //     const {selected} = this.state;
    //     if (selected.length) { // anyway send array of ids to delete
    //         const ids = selected.map(v => v._id);
    //         this.setState({selected: []});
    //         return actions.delete(query, {}, ids); // multi
    //     } else {
    //         return actions.delete(query, {}, [item._id]); // one
    //     }
    // }
    //
    // setSelected(item, event) {
    //     let {selected} = this.state;
    //     this.setState({selected: [...selected, item]})
    // }

    render() {
        const {match, routes} = this.props;
        // const {data} = this.props[selector];
        // const {selected} = this.state;
        // const methods = {
        //     update: this.handleUpdate,
        //     get: this.handleGet,
        //     create: this.handleCreate,
        //     delete: this.handleDelete.bind(this)
        // };
        debugger
        return (
            <Router>
                <div>
                    <h5>Payments</h5>
                    <div>
                        <ul>
                            {
                                routes.map(function (route, i) {
                                    let path = route.path;
                                    return (
                                        <li key={i}><Link to={`${path}`}>{path}</Link></li>
                                    )
                                })
                            }
                            {/*<li><Link to={`${match.url}/create`}>create</Link></li>*/}
                            {/*<li><Link to={`${match.url}/data`}>data</Link></li>*/}
                            {/*<li><Link to="/ptopicsayments">Payments</Link></li>*/}
                            {/*<li><Link to="/">Topics</Link></li>*/}
                            {/*<li><Link to="/about">About</Link></li>*/}
                            {/*<li><Link to="/counter">Counter</Link></li>*/}
                            {/*<li><Link to="/counters">Counters</Link></li>*/}
                            {/*<li><Link to="/register">Register</Link></li>*/}
                        </ul>

                        {/*<FlatButton onClick={this.handleGet.bind(this)} label="get"/>*/}
                        {/*<FlatButton onClick={this.handleCreate.bind(this)} label="create"/>*/}
                        {/*<FlatButton onClick={this.handleUpdate.bind(this)} label="update"/>*/}
                        {/*<FlatButton onClick={this.handleDelete.bind(this, selected)} label="delete many"/>*/}
                    </div>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                    ))}
                </div>
            </Router>

        )
    }
}

export default Payments;