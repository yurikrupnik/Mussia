import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router';
import resource from './request';
import {selector, url} from './config';
import smartConnect from '../../redux/smart-component';

class Payments extends Component {

    constructor(props) {
        super(props);
        // this.selector = selector;
        this.state = {
            selected: []
        }
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

    static propTypes = {
        actions: PropTypes.object.isRequired,
        [selector]: PropTypes.object.isRequired,
    };

    componentDidMount() {
        // const {actions} = this.props;
        // actions.read({fields: 'name'}, {yalublu: false});
    }

    handleGet() {
        const {actions, location} = this.props;
        const {pathname, query, search} = location;
        actions.read(query, {yalublu: true}, {
            fields: ['name', 'info']
        });
    }

    handleCreate() {
        const {actions} = this.props;
        return actions.create({fields: 'info'}, {yalublu: true});

    }

    handleUpdate() {
        const {actions} = this.props;
        return actions.update({fields: 'info'}, {yalublu: true});

    }

    handleDelete(item) {
        const {actions, location} = this.props;
        const {pathname, query, search} = location;
        // const {actions} = this.props;
        const {selected} = this.state;
        if (selected.length) { // anyway send array of ids to delete
            const ids = selected.map(v => v._id);
            this.setState({selected: []});
            return actions.delete(query, {}, ids); // multi
        } else {
            return actions.delete(query, {}, [item._id]); // one
        }
    }

    setSelected(item, event) {
        let {selected} = this.state;
        this.setState({selected: [...selected, item]})
    }

    render() {
        const {data} = this.props[selector];
        const {selected} = this.state;
        return (
            <div>
                <h5>Payments</h5>
                <div>
                    <FlatButton onClick={this.handleGet.bind(this)} label="get"/>
                    <FlatButton onClick={this.handleCreate.bind(this)} label="create"/>
                    <FlatButton onClick={this.handleUpdate.bind(this)} label="update"/>
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

export default smartConnect(Payments);