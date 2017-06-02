
import {
    BrowserRouter as Router,
    Route,
    Link,
    PrivateRoute,
    withRouter,
    Switch,
    StaticRouter
} from 'react-router-dom';
import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
const Pays = ({match, list}) => (list.map((v, i) =>
    <div key={i}>{v.name}</div>
));
const numbers = [1, 2, 3, 4, 5];

class PaymentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: []
        }
    }

    componentDidMount() {
        const {actions, location, match} = this.props;
        const {pathname, search} = location;
        const readConfig = {
            // search: search,
            // params: {},
            // fields: [],
            // limit: 100,
            // order: 'desc'
        };

        actions.read(readConfig);
    }

    handleDelete(id, e){
        e.preventDefault();
        const {actions, location, match} = this.props;
        actions.deleteById(id, e);
    }

    handleDeletes(id, e){
        e.preventDefault();
        const {actions, location, match} = this.props;
        actions.deleteByIds(id, e);
        this.setState({selected: []});
    }

    setSelected(id, e) {
        this.setState({
            selected: this.state.selected.concat(id)
        });
    }

    handleGoToEdit(id, e) {
        e.preventDefault();
        this.props.history.push('/payments/edit/' + id);
    }

    render() {
        const {payments} = this.props;
        return (
            <div>
                <div>selected: {this.state.selected.length}</div>
                <FlatButton label={'Delete'} onClick={this.handleDeletes.bind(this, this.state.selected)} />
                {payments.map((post, i) =>{
                    return (<div key={i} onClick={this.setSelected.bind(this, post.id)}>
                        <div>
                            <h5>{post.title}</h5>
                            <FlatButton label={'Edit'} onClick={this.handleGoToEdit.bind(this, post.id)} />
                            <FlatButton label={'Delete'} onClick={this.handleDelete.bind(this, post.id)} />
                        </div>
                    </div>)
                    }
                )}
            </div>
        )
    }
    // render() {
    //     const {payments} = this.props;
    //     const {match, actions} = this.props;
    //     // const {data, count} = payments;
    //     // const listItems = payments.map((v, i) =>
    //         {/*<div key={i}>{v.name}</div>*/}
    //     // );
    //     const listItems = () => {
    //         return payments.map((val, index) => {
    //             return (<div key={index}>{val.title}</div>)
    //         });
    //     };
    //     return (<div>
    //         payments
    //         <div>length {payments.length}</div>
    //         <listItems />
    //     </div>);
    // }
}
//getStateBySelector(selector), createDispatcherByResource(Resource)
import {connect} from 'react-redux';

import {getPayments, dispatchActions} from '../../../redux/data/payments/selectors';
import {getUser} from '../../../redux/selectors/user';
function gets(state, ownProps) {
    return {
        ...getUser(state, ownProps),
        ...getPayments(state, ownProps)
    }
}
export default connect(gets, dispatchActions)(PaymentsList);
import smartComponent from '../index';
import request from '../../../api/payments/request';

// export default smartComponent(request, PaymentsList);
// export default PaymentsList;