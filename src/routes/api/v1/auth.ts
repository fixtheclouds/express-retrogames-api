import express from 'express'
import authController from '@controllers/AuthController'

const router = express.Router()

// POST /auth/login
router.post('/login', authController.signIn)

// POST /auth/logout
router.post('/logout', authController.signOut)

// POST /auth/register
router.post('/register', authController.signUp)

export default router
