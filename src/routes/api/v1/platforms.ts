import express from 'express';
import { createPlatform } from '../../../controllers/PlatformsController';

const router = express.Router();

// GET /games
router.get('/', () => {});

// GET /games/:id
router.get('/:id', () => {});

// POST /games
router.post('/', createPlatform);

// PUT /games/:id
router.put('/:id', () => {});

// DELETE /games/:id
router.delete('/:id', () => {});

export default router;
