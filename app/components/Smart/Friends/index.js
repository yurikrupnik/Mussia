import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
// import resource from './request';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom'

// import routes from './routes';
// import RouteWithSubRoutes from '../../Utils/RouteWithRoutes';
// import smartComponent from '../index';



class Friends extends Component {

    constructor(props) {
        super(props);
    }
    componentWillMount() {
        const {actions} = this.props;
        actions.read();
    }

    // componentDidMount() {
    //     // const {actions} = this.props;
    //     const {actions, location, match} = this.props;
    //     const {pathname, query, search} = location;
    //     actions.read(query, {yalublu: true}, {
    //         fields: ['name', 'info']
    //     });
    // }
    // handleDelete(id, e) {
    //     // console.log('e', e);
    //     //
    //     const {actions, location, match} = this.props;
    //     // const {pathname, query, search} = location;
    //     // debugger
    //     actions.delete({}, {yalublu: true}, [id]);
    // }




    render() {
        const {match, friends} = this.props;
        const listItems = friends.map((v, i) =>
            <div key={i}>{v.name}</div>
        );
        const numbers = [1, 2, 3, 4, 5];
        // const listItems = friends.map((number) =>
        //     <li>{number}</li>
        // );
        return (
            <Router>
                <div>
                    <h5>Friends</h5>
                    <ul>{listItems}</ul>
                </div>
            </Router>

        )
    }
}
import {connect} from 'react-redux';

import {getFriends, dispatchActions} from '../../../redux/data/friends/selectors';
export default connect(getFriends, dispatchActions)(Friends);