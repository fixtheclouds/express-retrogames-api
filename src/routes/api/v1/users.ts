import express from 'express'
import authMiddleware from '../../../middleware/authMiddleware'
import usersController from '../../../controllers/UsersController'

const router = express.Router()

router.use(authMiddleware.getMiddleware())
// GET /users/current
// TODO: change routes to avoid login conflicts
router.get('/current', usersController.getCurrentUser)

// GET /users/:login
router.get('/:login', usersController.getUser)

// DELETE /users
router.delete('/', usersController.deleteUser)

export default router
