import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
        data: PropTypes.array.isRequired,
    };

    componentDidMount() {
        const {actions} = this.props;
        actions.fetch();
    }

    handleGetPayments() {
        const {actions} = this.props;
        return actions.fetch();
    }

    render() {
        const {data} = this.props;
        return (
            <div>
                <h5>Payments</h5>
                <div>
                    <FlatButton onClick={this.handleGetPayments.bind(this)} label="Default"/>
                </div>
                <div>
                    <Link to="/payments/counter">go to counter inside payments</Link>
                    <div>count {data.length}</div>
                    {data.length > 0 &&
                    <div>
                        {data.map((val, i) => {
                            return <div key={i}>{val.name}</div>
                        })}
                    </div>}
                </div>
                {this.props.children}
            </div>

        )
    }
}

// export default Payments;
export default connect(getPayments, dispatchActions)(Payments);