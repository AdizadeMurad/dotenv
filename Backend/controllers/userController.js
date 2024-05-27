import { productModel } from "../models/UserModel.js"
import bcrypt from "bcrypt";

export const getAll = async (req, res) => {
    const product = await productModel.find()
    res.send(product)
}

export const getByid = async (req, res) => {
    const product = await productModel.find()
    res.send(product)
}


export const getByUptadeId = async (req, res) => {
    const { id } = req.params
    const body = req.body
    const product = await productModel.findByIdAndUpdate(id, body)
    res.send(product)
}


export const getByDeleteId = async (req, res) => {
    const { id } = req.params
    const product = await productModel.findByIdAndDelete(id)
    res.send(product)
}


export const getSignIn = async (req, res) => {
    const { username, password } = req.body
    const HashedPassword = await bcrypt.hash(password, 10);
    const product = new productModel({ username, password: HashedPassword })
    await product.save()
    res.send(product)
}


export const getLogin = async (req, res) => {
    const { username, password } = req.body

    const user = await productModel.findOne({ username: username })

    if (!user) {
        return res.send("user is not defined")

    }

    const isPassword = await bcrypt.compare(password, user.password)
    if (!isPassword) {
        return res.send("password wrong")

    }
    res.send("xso gelmisen")
}