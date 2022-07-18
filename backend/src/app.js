import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import log from 'morgan';
import mongoose from 'mongoose';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(log('common'))
app.use(authRouter) // Route Auth
app.use(userRouter)

mongoose.connect(process.env.MONGO_URL)
  .then(ok => console.log('MongoDB Connection OK!'))

export default app //export APP