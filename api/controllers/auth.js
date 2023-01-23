import User from "../models/User.js";

import bcrypt from 'bcrypt';
import { createError } from "../utils/error.js";

export const register = async(req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const newUser = new User(req.body)
        await newUser.save();
        res.status(200).send(newUser);
    } catch (error) {
        next(error)
    }
}

export const login = async(req,res,next) => {
    
    try {
        const user = await User.findOne({username: req.body.username})
        if(!user) next(createError(401, "Wrong username or password"))


        const password = req.body.password;
        const result = await bcrypt.compare(password, user.password)
        if (result) {
            const {password, isAdmin, ...others} = user._doc
            res.status(200).send(others)
        } else {
            next(createError(401, "Wrong username or password"))
        }
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async(req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).send("user has been deleted")
    } catch (error) {
        next(error)
    }
}

export const getAll = async(req,res,next) => {
    try {
        const users = await User.find({});
        res.status(200).send(users)
    } catch (error) {
        next(error)
    }
}

export const test = async (req, res, next) => {
    const password = req.body.password;
    const hash = await bcrypt.hash(password, 10);

    const confirmPassword = "admin";
    const result = await bcrypt.compare(confirmPassword, hash);
    
    res.send(result)
}

