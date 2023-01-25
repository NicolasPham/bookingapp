import express from "express";
import * as hotel from "../controllers/hotel.js";

/**Verify User and Admin */
import { verifyToken, verifyAdmin } from "../utils/verifyToken.js";
/***Handle Error */
import { createError } from "../utils/error.js";

const router = express.Router();

//CREATE
router.get("/", (req, res) => {
  res.send("Hotel page");
});

router.post("/", verifyToken, verifyAdmin, hotel.createHotel);
router.put("/:id", verifyToken, verifyAdmin, hotel.updateHotel);
router.delete("/:id", verifyToken, verifyAdmin, hotel.deleteHotel);

//GET ALL
router.get("/all", hotel.getAllHotel);

//GET
router.get("/:id", hotel.getOneHotel);

export default router;
