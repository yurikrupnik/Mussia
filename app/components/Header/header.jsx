import React from 'react';

function Header(props) {
    // Correct! This use of <div> is legitimate because div is a valid HTML tag:
    return (<div>Hello {props.toWhat}</div>);
}

// render(<Header />, document.getElementById('react-root'));

export default Header;