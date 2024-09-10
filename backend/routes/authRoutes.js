import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.post('/validate-token', authMiddleware, (req, res) => {
  res.status(200).json({ tokenIsValid: true });
});
export default router;
