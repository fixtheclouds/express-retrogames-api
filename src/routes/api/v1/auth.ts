import express from 'express';
import {
  signIn,
  signOut,
  signUp
} from '../../../controllers/auth';

const router = express.Router();

// POST /auth/login
router.post('/login', signIn);

// POST /auth/logout
router.post('/logout', signOut);

// POST /auth/register
router.post('/register', signUp);

export default router;
