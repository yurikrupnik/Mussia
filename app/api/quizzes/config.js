import {READ, DELETE, UPDATE, CREATE, SCHEMA} from '../../constants';

const collection = 'quizzes';

export default {
    dbModel: 'Quiz', // mongoose model name
    url: `/${collection}`, // server url
    schemaUrl: `/${collection}/${SCHEMA.toLowerCase()}`, // schema url
    selector: `${collection}`, // reducer state to take from to put on smart components
    clientModel: collection.toUpperCase(),
    crud: [READ, DELETE, UPDATE, CREATE]
}