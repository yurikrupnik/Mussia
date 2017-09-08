import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import { mapToProps as userMapToProps, actions as userActions } from '../../../redux/user/selectors';
import { mapToProps as commentsMapToProps, actions as commentsActions } from '../../../redux/comments/selectors';
import mark from '../../Mark';

const style = {
    width: '90%',
    margin: '0 auto'
};

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { search: '' };
    }

    componentDidMount() {
        const { actions } = this.props;
        actions.getComments();
    }

    handleChange(e) {
        this.setState({ search: e.target.value });
    }

    render() {
        const { comments } = this.props;
        const { search } = this.state;
        const { data } = comments;
        const filtered = search ? data.filter(v => v.email.includes(search) || v.name.includes(search)) : data;
        return (
            <div style={style}>
                <TextField fullWidth={true}
                           hintText="Search"
                           onChange={this.handleChange.bind(this)}
                />

                <hr/>

                {filtered.length ? filtered.map(comment => (
                    <div key={comment.id}>
                        {search && comment.name.includes(search) ? mark(comment.name, search) :
                            <div>{comment.name}</div>}
                        {search && comment.email.includes(search) ? mark(comment.email, search) :
                            <div>{comment.email}</div>}
                        <hr/>
                    </div>)) : null}
            </div>
        );
    }
}

const combinedMapTpProps = state => ({
    user: userMapToProps(state),
    comments: commentsMapToProps(state)
});

const combinedDispatchActions = dispatch => ({
    actions: bindActionCreators(Object.assign({}, userActions, commentsActions), dispatch)
});

export default connect(combinedMapTpProps, combinedDispatchActions)(Main);