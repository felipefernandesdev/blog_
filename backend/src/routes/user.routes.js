import express from 'express';
import userController from '../controllers/user.controller.js';

const router = express.Router()

//FIND ALL USERS
router.get('/api/users', userController.find)
router.get('/api/users/:id', userController.getById)
router.put('/api/users/:id', userController.update)
router.delete('/api/users/:id', userController.delete)

export default router