import express from 'express';
import { getPlatforms, getPlatform, createPlatform } from '../../../controllers/PlatformsController';

const router = express.Router();

// GET /platforms
router.get('/', getPlatforms);

// GET /platforms/:id
router.get('/:id', getPlatform);

// POST /platforms
router.post('/', createPlatform);

// PUT /platforms/:id
router.put('/:id', () => {});

// DELETE /platforms/:id
router.delete('/:id', () => {});

export default router;
