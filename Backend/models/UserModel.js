import mongoose from "mongoose";


const usersschema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: String,
});


export const productModel = mongoose.model('users', usersschema)