import express from'express';
import database from '../database';

const router = express.Router();

router.get('/', async (req, res, next) => {
  await database.authenticate();
  res.status(200).send({ wagmi: true });
});

export default router;
