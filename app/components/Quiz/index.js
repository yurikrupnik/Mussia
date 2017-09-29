import React from 'react';

const Quiz = (props) => {
    console.log('props', props);
    const {data } = props;
    console.log('data.answers', data.answers);

    return (
        <div>
             <div>{data.label}</div>
            {data.answers.map(answer => {
                return <div>{answer.label}</div>
            })}
        </div>
    )
};

export default Quiz;