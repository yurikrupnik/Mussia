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


import RouteWithSubRoutes from '../../components/Utils/RouteWithRoutes';

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