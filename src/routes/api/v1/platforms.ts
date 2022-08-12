import express from 'express'
import platformsController from '../../../controllers/PlatformsController'

const router = express.Router()

// GET /platforms
router.get('/', platformsController.getPlatforms)

// GET /platforms/:id
router.get('/:id', platformsController.getPlatform)

// POST /platforms
router.post('/', platformsController.createPlatform)

// PATCH /platforms/:id
router.patch('/:id', platformsController.updatePlatform)

// DELETE /platforms/:id
router.delete('/:id', platformsController.deletePlatform)

export default router
