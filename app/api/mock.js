const answers = [
    {
        answerId: 1,
        text: '8:00 AM'
    },
    {
        answerId: 2,
        text: '8:30 AM'
    },
    {
        answerId: 3,
        text: '9:00 AM'
    },
    {
        answerId: 4,
        text: 'Alexa Wave'
    },
    {
        answerId: 5,
        text: 'John Sweet Tooth'
    },
    {
        answerId: 6,
        text: 'Marry Poppins'
    },
    {
        answerId: 7,
        text: 'Britney Spears'
    },
    {
        answerId: 8,
        text: 'Jay Z'
    }
];

const quizzes = [
    {
        quizId: 1,
        question: 'When should school start each day',
        answersIds: [
            1, 2, 3
        ]
    },
    {
        quizId: 2,
        question: 'Who should be selected for the student body president',
        answersIds: [
            4, 5, 6, 7, 8
        ]
    }
];

const votes = [
    {
        quizId: 1,
        meta: [
            {
                answerId: 1,
                votes: ['153701624@N07']
            },
            {
                answerId: 2,
                votes: []
            },
            {
                answerId: 3,
                votes: []
            }
        ]
    },
    {
        quizId: 1,
        meta: [
            {
                answerId: 4,
                votes: ['153701624@N07']
            },
            {
                answerId: 5,
                votes: []
            },
            {
                answerId: 6,
                votes: []
            },
            {
                answerId: 7,
                votes: []
            },
            {
                answerId: 8,
                votes: []
            }
        ]
    }
];

export {
    answers,
    quizzes,
    votes
}