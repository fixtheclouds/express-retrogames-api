import express from 'express';
import {
  getGenres,
  createGenre,
  deleteGenre,
} from '../../../controllers/genres';

const router = express.Router();

// GET /genres
router.get('/', getGenres);

// POST /genres
router.post('/', createGenre);

// DELETE /genres/:id
router.delete('/:id', deleteGenre);

export default router;
