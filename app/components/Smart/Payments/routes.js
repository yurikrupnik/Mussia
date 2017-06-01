
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
import {connect} from 'react-redux';
import {getPayments, dispatchActions} from '../../../redux/data/payments/selectors';
import PaymentsList from './list';
import smartComponent from '../index';
import request from '../../../api/payments/request';
// let conected = smartComponent(request, PaymentsData);

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            company: '',
            amount: 1
        };
        props.actions.getSchema().then(function (res) {
            console.log('res', res);

        });
    }
    handleSubmit(form ,e) {
        e.preventDefault();
        const {actions} = this.props;

        debugger
        // let isFull = this.state.every(v => v);
        // if (isFull) {
            actions.create(this.state);
        // }
    }

    handleChange(event) {
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {

        return (
            <div>
                <h4>Create New Payment</h4>
                <form>
                    <div>
                        <h5>Title: </h5>
                        <input type="text" onChange={this.handleChange.bind(this)} name={'title'}/>
                    </div>
                    <div>
                        <h5>Company: </h5>
                        <input type="text" onChange={this.handleChange.bind(this)} name={'company'}/>
                    </div>
                    <div>
                        <h5>Amount: </h5>
                        <input type="number" step={1} max={100} min={0} onChange={this.handleChange.bind(this)} name={'amount'}/>
                    </div>
                    <button onClick={this.handleSubmit.bind(this)}>Submit</button>
                </form>
            </div>
        )
    }

}
// let SmartCreate = smartComponent(request, Create);

class Edit extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(form, event) {
        event.preventDefault();
        const {actions, location, match} = this.props;
        actions.update({}, match.params, {title: 'wjat everer'});
    }

    render() {
        const {actions, location, match} = this.props;
        return (
            <div>
                <h3>Edit for ID: {match.params.id}</h3>
                <form ref="form1">
                    <div>
                        <h5>Title</h5>
                        <input type="text" name="title"/>
                    </div>
                    <button onClick={this.handleSubmit.bind(this, 'form1')}>submit</button>
                </form>
            </div>
        )
    }

}

// let SmartEdit = smartComponent(request, Edit);


export default [
    {
        path: '/payments/create',
        component: connect(getPayments, dispatchActions)(Create),
        exact: true
    },
    {
        path: '/payments',
        component: connect(getPayments, dispatchActions)(PaymentsList),
        exact: true,
    },
    {
        path: '/payments/edit/:id',
        component: connect(getPayments, dispatchActions)(Edit),
        exact: true
    }
]