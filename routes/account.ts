import express from'express';
import postAccountHandler from '../handlers/account/post';
import getAccountByIdHandler from '../handlers/account/{id}/get';

const router = express.Router();

router.post('/', postAccountHandler);
router.post('/:userId', getAccountByIdHandler);

export default router;
