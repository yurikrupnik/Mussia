import React, {Component, PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';

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
        // debugger
        // fetchPayments().then(function (d) {
        //     console.log('d', d);
        //
        // })
        const {actions} = this.props;
        actions.fetchPayments();
    }
    handleGetPayments(){
        const {actions} = this.props;
        return actions.fetchPayments();
    }
    render() {
        const {items, isFetching} = this.props;
        return (
            <div>
                serviuce.what ever u want
                <h5>Payments</h5>
                <div>
                    <FlatButton onClick={this.handleGetPayments.bind(this)} label="Default" />
                </div>
                <div>
                    <div>count {items.length}</div>
                    {items.length > 0 &&
                    <div>
                        {items.map((val, i) => {
                            return <div key={i}>{val.name}</div>
                        })}
                    </div>}
                </div>
            </div>

        )
    }
}

export default connect(getPayments, dispatchActions)(Payments);