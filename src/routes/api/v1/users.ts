import express from 'express'
import authMiddleware from '../../../middleware/authMiddleware'
import {
  getUser,
  getCurrentUser,
  deleteUser
} from '../../../controllers/users'

const router = express.Router()

router.use(authMiddleware.getMiddleware())
// GET /users/current
// TODO: change routes to avoid login conflicts
router.get('/current', getCurrentUser)

// GET /users/:login
router.get('/:login', getUser)

// DELETE /users
router.delete('/', deleteUser)

export default router
