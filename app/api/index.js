
import users, {usersUrl} from '../api/users';
import payments, {paymentsUrl} from '../api/payments';
// import friends, {friendsUrl} from '../api/friends';

let preset = '/api'; // todo add this dynamicly to all this dir
export default (app) => {
    // app.use(`${preset}/${usersUrl}`, users);
    // app.use(`${preset}/${paymentsUrl}`, payments);
    // app.use(registerUrl, register);
    app.use(preset, payments);
    app.use(preset, users);
    // app.use(friendsUrl, friends);
    // app.use(rootUrl, root); // after api calls to handle any other request that match *
}
