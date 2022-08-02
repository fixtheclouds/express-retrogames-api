import express from 'express';
import games from './games';
import genres from './genres';
import platforms from './platforms';

const router = express.Router();

router.use('/games', games);
router.use('/genres', genres);
router.use('/platforms', platforms);

export default router;
