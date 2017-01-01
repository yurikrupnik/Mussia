import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class Payments extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <FlatButton label="Default" />
                    <FlatButton label="Yebal" />
                    <FlatButton label="s" />
                </div>
                <h2>
                    Payments view
                </h2>
            </div>

        )
    }
}