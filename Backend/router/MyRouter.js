import express from "express";
export const userRouter = express.Router()
import { getAll, getByDeleteId, getByUptadeId, getByid, getLogin, getSignIn } from "../controllers/userController.js";


userRouter.get('/users', getAll)

userRouter.get('/users/:id', getByid)

userRouter.put('/users/:id', getByUptadeId)

userRouter.delete('/users/:id', getByDeleteId)

userRouter.post('/signin', getSignIn)

userRouter.post('/login', getLogin)

