import express from 'express'
import gamesController from '../../../controllers/GamesController'

const router = express.Router()

// GET /games
router.get('/', gamesController.getGames)

// GET /games/:id
router.get('/:id', gamesController.getGame)

// POST /games
router.post('/', gamesController.createGame)

// PATCH /games/:id
router.patch('/:id', gamesController.updateGame)

// DELETE /games/:id
router.delete('/:id', gamesController.deleteGame)

export default router
