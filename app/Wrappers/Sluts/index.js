import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getStateByModelPrefix, dispatchActions} from '../../redux/selectors/sluts';

class Sluts extends Component {

    constructor(props) {
        super(props);
    }

    static get prefix() {
        return 'sluts';
    }

    static propTypes = {
        actions: PropTypes.object.isRequired,
        data: PropTypes.object.isRequired,
    };

    static defaultProps = {
        data: {data:[]}
    };

    componentDidMount() {
        const {actions} = this.props;
        actions.read({someShit: false});
    }

    handleGetPayments() {
        const {actions} = this.props;
        return actions.read({someShit: true});
    }

    render() {
        const {data} = this.props.data;
        return (
            <div>
                <h5>sluts</h5>
                <div>
                    <FlatButton onClick={this.handleGetPayments.bind(this)} label="Default"/>
                </div>
                <div>
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

export default connect(getStateByModelPrefix(Sluts.prefix), dispatchActions)(Sluts);