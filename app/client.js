import React from 'react';
import 'flexboxgrid'; // load flexbox for grid system
import './styles/custom-styles.scss';
import './services/node/socket/client'; // connect to socket client
import AppWrapper from './Wrappers/App';
import {render} from 'react-dom';
const ROOT = document.getElementById('root');
//
// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     withRouter
// } from 'react-router-dom'
// const Di = (routes) => {
//     return (<div>hello</div>)
// };
//
// const Home = () => (
//     <div>
//         <h2>Home</h2>
//     </div>
// )
//
// const About = () => (
//     <div>
//         <h2>About</h2>
//     </div>
// )
//
// const Topics = ({ match }) => (
//     <div>
//         <h2>Topics</h2>
//         <ul>
//             <li>
//                 <Link to={`${match.url}/rendering`}>
//                     Rendering with React
//                 </Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/components`}>
//                     Components
//                 </Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/props-v-state`}>
//                     Props v. State
//                 </Link>
//             </li>
//         </ul>
//
//         <Route path={`${match.url}/:topicId`} component={Topic}/>
//         <Route exact path={match.url} render={() => (
//             <h3>Please select a topic.</h3>
//         )}/>
//     </div>
// )
//
// const Topic = ({ match }) => (
//     <div>
//         <h3>{match.params.topicId}</h3>
//     </div>
// )
//
//
//
// const BasicExample = () => (
//     <Router>
//         <div>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/topics">Topics</Link></li>
//             </ul>
//
//             <hr/>
//
//             <Route exact path="/" component={Home}/>
//             <Route path="/about" component={About}/>
//             <Route path="/topics" component={Topics}/>
//         </div>
//     </Router>
// )
let renderToDOM = (initialState = window.__PRELOADED_STATE__) => render(
    <AppWrapper initialState={initialState}/>, ROOT
);

renderToDOM();
