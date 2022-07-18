import express from 'express';
import AuthController from '../controllers/auth.controller.js';
const router = express.Router()

//REGISTER
router.post('/register', AuthController.register)

//LOGIN

export default router