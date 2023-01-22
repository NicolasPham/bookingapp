import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hotels pages");
})


export default router