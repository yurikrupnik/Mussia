import {Router} from 'express';
import {count, show} from './friend.controller';
export let friendsUrl = '/friends';
let router = Router();

router.get('/', show);
// router.post('/', fn)
router.get('/count', count);

export default router;