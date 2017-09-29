import React from 'react';

const Quiz = (props) => {
    const {data} = props;
    return (
        <div>
             <div>{data.label}</div>
            {data.answers &&
            data.answers.length &&
            data.answers.map((answer, i) => <div key={i}>{answer.label}</div>)}
        </div>
    )
};

export default Quiz;