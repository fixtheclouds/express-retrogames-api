import express from 'express';
import {
  getGame,
  getGames,
  createGame,
  updateGame,
  deleteGame,
} from '../../../controllers/games';

const router = express.Router();

// GET /games
router.get('/', getGames);

// GET /games/:id
router.get('/:id', getGame);

// POST /games
router.post('/', createGame);

// PUT /games/:id
router.put('/', updateGame);

// DELETE /games/:id
router.delete('/:id', deleteGame);

export default router;
