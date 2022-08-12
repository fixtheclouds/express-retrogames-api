import express from 'express'
import genresController from '../../../controllers/GenresController'

const router = express.Router()

// GET /genres
router.get('/', genresController.getGenres)

// POST /genres
router.post('/', genresController.createGenre)

// DELETE /genres/:id
router.delete('/:id', genresController.deleteGenre)

export default router
