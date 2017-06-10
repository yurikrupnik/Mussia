import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {RadioButton} from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import {AutoComplete as MUIAutoComplete} from 'material-ui';
import {
    AutoComplete,
    Checkbox,
    DatePicker,
    TimePicker,
    RadioButtonGroup,
    SelectField,
    Slider,
    TextField,
    Toggle,
} from 'redux-form-material-ui';

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value =>
    (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email'
        : undefined);
const tooManyPizzas = value => (value > 15 ? 'Are you mad?' : undefined);

class Form extends Component {
    // componentDidMount() {
        // this.refs.name // the Field
        //     .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
        //     .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
        //     .focus(); // on TextField
    // }

    render() {
        const {handleSubmit, pristine, reset, submitting, errors} = this.props;
        console.log('errors', errors);
        
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        name="title"
                        component={TextField}
                        hintText="Title"
                        floatingLabelText="Title"
                        validate={required}
                        ref="title"
                        withRef
                    />
                </div>
                <div>
                    <Field
                        name="company"
                        component={TextField}
                        hintText="company"
                        floatingLabelText="Company"
                        validate={required}
                    />
                </div>
                <div>Amount?</div>
                {/*<div>{numPizzas}</div>*/}
                <div>
                    <Field
                        name="amount"
                        type="number"
                        component={TextField}
                        min={0}
                        max={20}
                        step={1}
                        validate={required}
                        warn={tooManyPizzas}
                    />
                </div>
                {/*<div>*/}
                    {/*<Field*/}
                        {/*name="driver"*/}
                        {/*component={SelectField}*/}
                        {/*hintText="Driver"*/}
                        {/*floatingLabelText="Driver"*/}
                        {/*validate={required}*/}
                    {/*>*/}
                        {/*<MenuItem value="alice@redux-pizza.com" primaryText="Alice" />*/}
                        {/*<MenuItem value="bob@redux-pizza.com" primaryText="Bob" />*/}
                        {/*<MenuItem value="carl@redux-pizza.com" primaryText="Carl" />*/}
                    {/*</Field>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<Field*/}
                        {/*name="thinCrust"*/}
                        {/*component={Toggle}*/}
                        {/*label="Thin Crust"*/}
                        {/*labelPosition="right"*/}
                    {/*/>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<Field name="pepperoni" component={Checkbox} label="Pepperoni" />*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<Field name="mushrooms" component={Checkbox} label="Mushrooms" />*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<Field name="peppers" component={Checkbox} label="Peppers" />*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<Field*/}
                        {/*name="when"*/}
                        {/*component={DatePicker}*/}
                        {/*format={null}*/}
                        {/*hintText="Day of delivery?"*/}
                        {/*validate={required}*/}
                    {/*/>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<Field*/}
                        {/*name="at"*/}
                        {/*component={TimePicker}*/}
                        {/*format={null}*/}
                        {/*defaultValue={null} // TimePicker requires an object,*/}
                        {/*// and redux-form defaults to ''*/}
                        {/*hintText="At what time?"*/}
                        {/*validate={required}*/}
                    {/*/>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<Field*/}
                        {/*name="notes"*/}
                        {/*component={TextField}*/}
                        {/*hintText="Notes"*/}
                        {/*floatingLabelText="Notes"*/}
                        {/*multiLine*/}
                        {/*rows={2}*/}
                    {/*/>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<Field*/}
                        {/*name="cheese"*/}
                        {/*component={AutoComplete}*/}
                        {/*floatingLabelText="Cheese"*/}
                        {/*openOnFocus*/}
                        {/*filter={MUIAutoComplete.fuzzyFilter}*/}
                        {/*dataSource={['Cheddar', 'Mozzarella', 'Parmesan', 'Provolone']}*/}
                    {/*/>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<Field*/}
                        {/*name="referral"*/}
                        {/*component={AutoComplete}*/}
                        {/*floatingLabelText="How did you find us?"*/}
                        {/*openOnFocus*/}
                        {/*filter={MUIAutoComplete.fuzzyFilter}*/}
                        {/*dataSourceConfig={{text: 'name', value: 'id'}}*/}
                        {/*dataSource={[*/}
                            {/*{id: 0, name: 'Facebook'},*/}
                            {/*{id: 1, name: 'Yelp'},*/}
                            {/*{id: 2, name: 'TV Ad'},*/}
                            {/*{id: 3, name: 'Friend'},*/}
                            {/*{id: 4, name: 'Other'},*/}
                        {/*]}*/}
                    {/*/>*/}
                {/*</div>*/}
                <div>
                    <button type="submit" disabled={submitting}>Submit</button>
                    <button
                        type="button"
                        disabled={pristine || submitting}
                        onClick={reset}
                    >
                        Clear
                    </button>
                </div>
            </form>
        );
    }
}

// const selector = formValueSelector('example');
//
// Form = connect(state => ({
//     numPizzas: selector(state, 'pizzas'),
// }))(Form);

import {create} from '../../../redux/data/payments/actions';
export default reduxForm({
    form: 'example',
    onSubmit: create,
    // validate: required,
    // validate: function (values, dispatch, props) {
    //     let errors = {};
    //     const {title, company, amount} = values;
    //     if (title || company || amount) {
    //         return errors.required = 'required';
    //     } else {
    //         return {};
    //     }
    // },
    // initialValues: {
    //     title: 'delivery',
    //     company: 'Jane Doe',
    //     amount: 1,
    // },
})(Form);

