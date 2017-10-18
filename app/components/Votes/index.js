import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

export default ({quizzes, results, handleChange, handleClick}) => {
    const options = quizzes.data
        .map((val, i) => <MenuItem key={i} value={val._id} primaryText={val.label}/>);
    const votes = results.data.map((val, index) => {
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
                          onChange={handleChange}
                          value={quizzes.selected._id}
            >
                {options}
            </DropDownMenu>
            <h4>Results</h4>
            {votes}
            <FlatButton onClick={handleClick} label={'go to selected quiz'}/>
        </div>
    )
}