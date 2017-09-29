import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default (props) => {
    const options = props.options
        .map((val, i) => <MenuItem key={i} value={val._id} primaryText={val.label}/>);
    const votes = props.votes.map((val, index) => {
        return (
            <div className="row" key={index}>
                <div className="col-xs-6">{val.label}</div>
                <div className="col-xs-6">{val.count}</div>
            </div>
        )
    });
    return (
        <div>
            <h5>Select Quiz</h5>
            <DropDownMenu style={{display: 'block'}}
                          onChange={props.handleChange}
                          value={props.value}
            >
                {options}
            </DropDownMenu>
            <h4>Results</h4>
            {votes}
        </div>
    )
}