import express from 'express';
import {
  getUser,
  createUser,
  deleteUser
} from '../../../controllers/users';

const router = express.Router();

// GET /users/:login
router.get('/:login', getUser);

// POST /users
router.post('/', createUser);

// DELETE /users
router.delete('/', deleteUser);

export default router;
