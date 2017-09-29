import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';

export default (props) => {
    return (
        <div>
            <h5>Select Quiz</h5>
            <DropDownMenu style={{display: 'block'}}
                          onChange={props.handleChange}
                          value={props.value}
            >
                {props.options}
            </DropDownMenu>
            <h4>Results</h4>
            {props.votes}
        </div>
    )
}