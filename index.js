import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { userRouter } from './Backend/router/MyRouter.js';

import 'dotenv/config'

const app = express()
app.use(express.json())
app.use(cors())
const port = 3000



app.use("/murad", userRouter)


mongoose.connect(process.env.DB_CONNECTION)
    .then(() => {
        console.log('Connected...!');
    })

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})