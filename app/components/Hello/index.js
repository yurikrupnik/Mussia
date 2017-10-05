import React from 'react';

const Hello = (props) => {
    // console.log('props', props);

    return (
        <div>
            <div className="container">hello from second container child - has access to all props from container</div>
        </div>
    )
};

export default Hello;