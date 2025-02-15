import express  from 'express';
import { getMyProfile, loginUser, registerUser } from '../controllers/AuthController';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const router = express.Router();

router.post('/register-user', registerUser);
router.post('/login-user', loginUser);
router.get('/get-my-profile', AuthMiddleware, getMyProfile);


export default router;