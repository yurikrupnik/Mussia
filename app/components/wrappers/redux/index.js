import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';

export default class Redux extends Component {

    static propTypes = {
        initialState: PropTypes.object.isRequired,
        children: PropTypes.element.isRequired,
        configStore: PropTypes.func.isRequired,
    };

    render() {
        const {initialState, children, configStore} = this.props;
        return (
            <Provider store={configStore(initialState)}>
                {children}
            </Provider>
        )
    }
}