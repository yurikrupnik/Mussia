import {GET} from './controller';
import {URL, countURL} from './urls';
import router from './../../services/express/Router';
router.get(URL, GET);
// router.get(countURL, count);

export default router;
