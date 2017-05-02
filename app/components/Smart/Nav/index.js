import React from 'react';
import {Link} from 'react-router-dom';
const Nav = (props) => {
    console.log('props', props);

    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/payments">Payments</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/counters">Counters</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
    );
};

export default Nav;