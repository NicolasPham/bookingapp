import express from 'express';
import Hotel from '../models/Hotel.js';

const router = express.Router();

//CREATE
router.get('/', (req,res) => {
    res.send("Hotel page")
})


router.post('/', async(req, res) => {
    const newHotel = new Hotel(req.body);
    
    try {
        await newHotel.save();
        res.status(200).send(newHotel);
    } catch (error) {
        res.status(500).send(error);
    }

    
})



//UPDATE
router.put('/:id', async (req, res) => {
    const hotelId = req.params.id;
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, {$set: req.body}, {new: true});
        res.status(200).send(updatedHotel);
    } catch (error) {  
        throw res.status(500).send(error)
    }
});



//DELETE
router.delete("/:id", async(req, res) => {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).send(deletedHotel);
    } catch (error) {
        res.status(500).send(error)
    }
})


//GET ALL
router.get('/all', async (req, res) => {
    const hotels = await Hotel.find({});
    res.send(hotels)
});

//GET
router.get('/:id', async (req,res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).send(hotel)
    } catch (error) {
        res.status(500).send(error);
    }

})



export default router