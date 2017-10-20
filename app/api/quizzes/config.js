

export default {
    url: '/quizzes', // server url
    schemaUrl: '/quizzes/schema', // server url
    selector: 'quizzes', // reducer state to take from to put on smart components
    dbModel: 'Quiz', // mongoose model name
    clientModel: 'QUIZZES',
    crud: ['GET', 'DELETE', 'PUT', 'POST']
}