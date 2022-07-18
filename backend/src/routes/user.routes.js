import express from 'express';
import userController from '../controllers/user.controller.js';

const router = express.Router()

//FIND ALL USERS
router.get('/api/users', userController.find)

export default router