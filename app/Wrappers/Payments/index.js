import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getStateByModelPrefix, dispatchActions} from '../../redux/selectors/payments';

class Payments extends Component {

    constructor(props) {
        super(props);
    }

    static get prefix() {
        return 'payments';
    }

    static propTypes = {
        actions: PropTypes.object.isRequired,
        data: PropTypes.object.isRequired,
    };

    componentDidMount() {
        const {actions} = this.props;
        actions.fetch({someShit: false});
     }

    handleGetPayments() {
        const {actions} = this.props;
        return actions.fetch({someShit: true});
    }

    render() {
        const {data} = this.props.data;
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

export default connect(getStateByModelPrefix(Payments.prefix), dispatchActions)(Payments);