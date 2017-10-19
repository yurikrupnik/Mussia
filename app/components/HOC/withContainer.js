import React, {Component} from 'react';

export default (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            console.log('withContainer props', props);

        }

        componentDidMount() {
            const {actions} = this.props;
            actions.read();
        }

        render() {
            return (
                <div>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    }
};;