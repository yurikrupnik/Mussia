import {READ, CREATE, UPDATE, DELETE} from './payment.controller';
import {url} from './config';
import router from './../../services/express/Router';

router.get(url, READ);
router.post(url, CREATE);
// router.put(URL, UPDATE);
router.delete(url, DELETE);

export default router;
