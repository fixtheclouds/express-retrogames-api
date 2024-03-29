import express from 'express'
import auth from './auth'
import games from './games'
import genres from './genres'
import platforms from './platforms'
import users from './users'

const router = express.Router()

router.use('/auth', auth)
router.use('/games', games)
router.use('/genres', genres)
router.use('/platforms', platforms)
router.use('/users', users)

export default router
