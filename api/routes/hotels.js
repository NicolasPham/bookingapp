import express from 'express';
import Hotel from '../models/Hotel.js';
import * as hotel from '../controllers/hotel.js'

/***Handle Error */
import {createError} from '../utils/error.js'

const router = express.Router();

//CREATE
router.get('/', (req,res) => {
    res.send("Hotel page")
})


router.post('/', hotel.createHotel);
router.put('/:id', hotel.updateHotel);
router.delete("/:id", hotel.deleteHotel)


//GET ALL
router.get('/all', hotel.getAllHotel);

//GET
router.get('/:id', hotel.getOneHotel)



export default router