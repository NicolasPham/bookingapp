import { Error } from "mongoose";
import Hotel from "../models/Hotel.js"

export const createHotel = async(req, res, next) => {
    try {
        const newHotel = new Hotel(req.body);
        await newHotel.save();
        res.status(200).send(newHotel)
    } catch (error) {
        next(error)
    }

}

export const updateHotel = async(req, res, next) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).send(updateHotel);
    } catch (error) {
        next(error)
    }
}

export const deleteHotel = async(req, res, next) => {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).send("Hotel has been deleted");
    } catch (error) {
        next(error)
    }
}


export const getOneHotel = async(req,res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).send(hotel)
    } catch (error) {
        next(error)
    }
}

export const getAllHotel = async(req, res, next) => {
    try {
        const allHotel = await Hotel.find({})
        res.status(200).send(allHotel);
    } catch (error) {
        next(error)
    }
}