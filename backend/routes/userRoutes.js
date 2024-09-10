import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.put('/goals', authMiddleware, updateUserGoals);

export default router;
