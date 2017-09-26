import shortid from 'shortid';

const user = {
    email: 'test@test.com',
    password: '123',
    id: shortid.generate()
};

const quizzes = [
    {
        // quiz_id: 1,
        label: 'When should school start each day',
        answers: [
            {
                label: '8:00 AM'
            },
            {
                label: '9:30 AM'
            },
            {
                label: '9:00'
            }
        ]
    },
    {
        // quiz_id: 2,
        label: 'Who should be selected for the student body president',
        answers: [
            {
                label: 'Alexa Wave'
            },
            {
                label: 'John Sweet Tooth'
            },
            {
                label: 'Marry Poppins'
            },
            {
                label: 'Britney Spears'
            },
            {
                label: 'Jay Z'
            }
        ]
    }
];

const results = [
    {
        quiz_id: 1,
        user_id: '153701624@N07',
        answer_id: 'some Object id',
        answer_label: '8:00 AM'
    },
    {
        quiz_id: 2,
        user_id: '153701624@N07',
        answer_id: 'some Object id',
        answer_label: 'Alexa Wave'
    }
];

export {
    user,
    quizzes
}