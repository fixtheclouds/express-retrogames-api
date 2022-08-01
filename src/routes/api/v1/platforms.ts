import express from 'express';
import {
  getPlatforms,
  getPlatform,
  createPlatform,
  updatePlatform,
  deletePlatform
} from '../../../controllers/platforms';

const router = express.Router();

// GET /platforms
router.get('/', getPlatforms);

// GET /platforms/:id
router.get('/:id', getPlatform);

// POST /platforms
router.post('/', createPlatform);

// PATCH /platforms/:id
router.patch('/:id', updatePlatform);

// DELETE /platforms/:id
router.delete('/:id', deletePlatform);

export default router;
