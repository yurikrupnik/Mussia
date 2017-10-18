import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

const isDisabled = (form) => !form.every(v => isBoolean(v.value) ? true : v.value);

const handleErrorText = (field) => {
    return field.value === '' ? 'field is required': '';
};
export default () => {
    const inputs = form.map((item, index) => {
        if (item.type === 'checkbox') {
            return <Checkbox key={index} value={item.value} name={item.name}
                             onCheck={this.handleChange.bind(this, index)}/>
        } else if (item.type === 'multi') {

            return <SelectField key={index} value={item.value} name={item.name} ref={item.name}
                                onChange={this.handleSelectField.bind(this)}>
                { item.enum.map((val, i) => {
                    return <MenuItem key={i} value={val.value} primaryText={val.label}/>
                }) }
            </SelectField>

        } else {
            return <TextField key={index}
                              value={item.value}
                              type={item.type}
                              onChange={this.handleChange.bind(this, index)}
                              min={item.min}
                              max={item.max}
                              name={item.name}
                              step={item.step}
                              errorText={handleErrorText(item)} />
        }
    });

    return <div>{inputs}</div>
}