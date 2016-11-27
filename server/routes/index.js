import root, {rootUrl} from './root';
import error, {errorUrl} from './error';
import users from './users';
import payments, {paymentsUrl} from '../api/payments';
import friends, {friendsUrl} from '../api/friends';

export default (app) => {
    app.use(rootUrl, root);
    app.use('/', users);


    app.use('/sizes', (req, res) => {
        res.json([2,4,6])
    });
    app.get('/user', (req, res) => {
        res.json([1, 2]);
    });


    app.use(paymentsUrl, payments);
    app.use(friendsUrl, friends);
    app.use(errorUrl, error); // must be last
}
