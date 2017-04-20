import {bindActionCreators} from 'redux';
// create dispatcher by actions amd bind to props as map to dispatcher
export default actions => dispatch => ({actions: bindActionCreators(actions, dispatch)});
