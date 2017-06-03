import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
class Create extends Component {
    constructor(props) {
        super(props);
        this.typeMap = {
            'String': 'text',
            'Number': 'number'

        };

        this.state = {
            form: []
        };
    }

    componentDidMount() {
        this.props.actions.getSchema().then((res) => {
            this.setState({
                form: res
            });
        });
    }


    handleSubmit(e) {
        e.preventDefault();
        const {actions} = this.props;
        console.log('actions', actions);

        // actions.create(this.state);
    }

    handleChange(event) {
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        // this.setState({
        //     [name]: value
        // });
    }

    handleNumberChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        // this.setState({
        //     [name]: value
        // });
    }

    handleType(type) {
        console.log('type', type);


        return this.typeMap[type];
    }

    render() {
        const {form} = this.state;
        console.log('form', form);

//         /*
//         *
//         *
//          defaultValue={val.defaultValue}
//          {/*id="num"*/}
// {/*required*/}
// {/*defaultValue={9}*/}
// {/*min={-10}*/}
// {/*max={12}*/}
// {/*strategy="warn"*/}
// {/*errorText={state.errorText}*/}
// {/*onValid={onValid}*/}
// {/*onChange={onChange}*/}
// {/*onError={onError}*/}
// {/*onRequestValue={onRequestValue}*/}
// {/*onKeyDown={onKeyDown} />*/}
//         *
//         * */

        return (
            <div>
                <h4>Create New Payment</h4>
                <form>
                    <div>
                        {form.map((val, key) => {
                            return (
                                <div key={key}>
                                    <TextField
                                        type={this.handleType.bind(this)(val.instance)}
                                        name={val.path}
                                        defaultValue={val.defaultValue}
                                        max={val.max}
                                        min={val.min}
                                    />

                                </div>
                            );
                        })}
                    </div>
                    <FlatButton label={'Submit'} onClick={this.handleSubmit.bind(this)}/>
                </form>
            </div>
        )
    }

}

export default Create;