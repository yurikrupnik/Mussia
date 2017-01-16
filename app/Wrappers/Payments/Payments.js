import React, {Component, PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';

import {Link} from 'react-router';
// import {fetchPayments} from '../../redux/actions/payments';
import {getPayments, dispatchActions} from '../../redux/selectors/payments';

class Payments extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        actions: PropTypes.object.isRequired,
        isFetching: PropTypes.bool.isRequired,
        items: PropTypes.array.isRequired,
    };

    componentDidMount() {
        const {actions} = this.props;
        actions.fetchPayments();
    }
    handleGetPayments(){
        const {actions} = this.props;
        return actions.fetchPayments();
    }
    render() {
        console.log('this.props', this.props);
// debugger
        const {items, isFetching} = this.props;
        return (
            <div>
                <h5>Payments</h5>
                <div>
                    <FlatButton onClick={this.handleGetPayments.bind(this)} label="Default" />
                </div>
                <div>
                    <Link to="/payments/counter" >go to counter inside payments</Link>
                    <div>count {items.length}</div>
                    {items.length > 0 &&
                    <div>
                        {items.map((val, i) => {
                            return <div key={i}>{val.name}</div>
                        })}
                    </div>}
                </div>
                {this.props.children}
            </div>

        )
    }
}

export default connect(getPayments, dispatchActions)(Payments);