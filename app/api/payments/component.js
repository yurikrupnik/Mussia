import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getStateByModelPrefix, dispatchActions} from '../../redux/selectors/payments';



class Payments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: []
        }
    }

    static get prefix() { // prefix to know which
        return 'payments';
    }

    static propTypes = {
        actions: PropTypes.object.isRequired,
        data: PropTypes.object.isRequired,
    };

    componentDidMount() {
        // const {actions} = this.props;
        // actions.read({fields: 'name'}, {yalublu: false});
    }

    handleGet() {
        const {actions} = this.props;
        return actions.read({fields: 'info'}, {yalublu: true});
    }

    handlePost() {
        const {actions} = this.props;
        return actions.post({fields: 'info'}, {yalublu: true});
    }

    handleDelete(item) {
        const {actions} = this.props;
        const {selected} = this.state;
        if (selected.length) { // anyway send array of ids to delete
            const ids = selected.map(v => v._id);
            this.setState({selected: []});
            return actions.delete(ids); // multi
        } else {
            return actions.delete([item._id]); // one
        }
    }

    setSelected(item, event) {
        let {selected} = this.state;
        this.setState({selected: [...selected, item]})
    }

    render() {
        const {data} = this.props.data;
        const {selected} = this.state;
        return (
            <div>
                <h5>Payments</h5>
                <div>
                    <FlatButton onClick={this.handleGet.bind(this)} label="GET"/>
                    <FlatButton onClick={this.handlePost.bind(this)} label="POST"/>
                    <FlatButton onClick={this.handleDelete.bind(this, selected)} label="delete many"/>
                </div>
                <div>
                    <div>count {data.length}</div>
                    {data.length > 0 &&
                    <div>
                        {data.map((val, i) => {
                            return <div key={i}>
                                <h2 onClick={this.setSelected.bind(this, val)}>{val.name}</h2>
                                <button onClick={this.handleDelete.bind(this, val)}>delete</button>
                            </div>
                        })}
                    </div>}
                </div>
                {this.props.children}
            </div>

        )
    }
}

export default connect(getStateByModelPrefix(Payments.prefix), dispatchActions)(Payments);