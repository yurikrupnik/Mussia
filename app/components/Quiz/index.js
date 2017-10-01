import React from 'react';

const Quiz = (props) => {
    const {quizzes} = props;
    const {selected} = quizzes;
    return (
        <div>
            <div className="title">Label: {selected.label}</div>
            {selected.answers &&
            selected.answers.length &&
            selected.answers.map((answer, i) => <div key={i}>{answer.label}</div>)}
        </div>
    )
};


export default Quiz;